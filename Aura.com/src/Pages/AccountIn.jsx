import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AccountIn.css';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';

const AccountIn = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: '', phone: '' });

  const [showPass, setShowPass] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('saffronUser');
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed);
      setEditedUser({ name: parsed.name, phone: parsed.phone || '' });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('saffronUser');
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const handleSave = () => {
    const updated = { ...user, ...editedUser };
    setUser(updated);
    localStorage.setItem('saffronUser', JSON.stringify(updated));
    setEditing(false);
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const changePassword = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const res = await axios.put(
        'https://aura-project-back.onrender.com/api/auth/change-password',
        { oldPassword: oldPass, newPassword: newPass },
        { headers: { Authorization: token } }
      );
      alert(res.data.msg);
      setOldPass('');
      setNewPass('');
      setShowPass(false);
    } catch (err) {
      alert(err.response?.data?.msg || 'Password change failed');
    }
  };

  return (
    <>
      <AppNavbar />
      <div className="account-container">
        {user ? (
          <div className="account-card">
            <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
            <h2 className="welcome-text">Welcome, <span>{user.name}</span></h2>

            {/* ✅ Fixed Message Block */}
            <div className="fixed-info-block">
              <p className="support-msg">
                You are signed in. <br />
                Our IT support team is ready to help you <strong>7 days a week</strong>.<br />
                Use the logout button below if you're done.<br />
                <strong>Your protection means everything to us.</strong>
              </p>

              <div className="account-actions">
                <button onClick={handleLogout} className="logout-btn">🚪 Logout</button>
              </div>
            </div>

            {!editing ? (
              <>
                <p><strong>📧 Email:</strong> {user.email}</p>
                {user.phone && <p><strong>📱 Phone:</strong> {user.phone}</p>}
                {user.lastLogin && <p><strong>🕒 Last Login:</strong> {user.lastLogin}</p>}

                <div className="account-actions">
                  <button onClick={() => setEditing(true)} className="edit-btn">✏️ Edit</button>
                </div>

                <div className="password-section">
                  {!showPass ? (
                    <button onClick={() => setShowPass(true)} className="change-pass-btn">🔑 Change Password</button>
                  ) : (
                    <div className="pass-form fade-slide-up">
                      <input
                        type="password"
                        placeholder="Old Password"
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
                        className="account-input"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        className="account-input"
                      />
                      <div className="account-actions">
                        <button onClick={changePassword} className="save-btn">✅ Change</button>
                        <button onClick={() => setShowPass(false)} className="cancel-btn">❌ Cancel</button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="account-input"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleChange}
                  className="account-input"
                  placeholder="Phone Number"
                />
                <div className="account-actions">
                  <button onClick={handleSave} className="save-btn">💾 Save</button>
                  <button onClick={() => setEditing(false)} className="cancel-btn">❌ Cancel</button>
                </div>
              </>
            )}
          </div>
        ) : (
          <p className="not-logged-msg">❌ You're not logged in. Please <a href="/login">login</a>.</p>
        )}
      </div>
      <AllSection />
    </>
  );
};

export default AccountIn;
