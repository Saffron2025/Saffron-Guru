import React from 'react';
import FloatingChat from '../Components/FloatingChat';

const UserDashboard = () => {
  return (
    <div>
      <h2>👤 Welcome, John Doe</h2>
      <FloatingChat role="user" name="John Doe" userId="user987" />
    </div>
  );
};

export default UserDashboard;
