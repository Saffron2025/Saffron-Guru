import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './FloatingChat.css';

const socket = io("http://localhost:5000", {
  transports: ["websocket"],       // ✅ force websocket only
  withCredentials: true            // ✅ matches backend CORS
});


const FloatingChat = ({ role, name, userId }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [targetSocketId, setTargetSocketId] = useState(null);
  const [selfSocketId, setSelfSocketId] = useState(null); // 🔥

  useEffect(() => {
    // When socket connects, store its ID
    socket.on('connect', () => {
      setSelfSocketId(socket.id); // ✅ Store current socket ID
      socket.emit("register", { role, name, userId });

      if (role === 'user') {
        socket.emit("map_to_expert");
      }
    });

    socket.on("mapped_to", (expertId) => {
      setTargetSocketId(expertId);
    });

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [role, name, userId]);

  const sendMessage = () => {
    if (input && targetSocketId && selfSocketId) {
      const msg = {
        from: selfSocketId,
        to: targetSocketId,
        message: input
      };

      socket.emit("send_message", msg);
      setMessages((prev) => [...prev, msg]);
      setInput('');
    }
  };

  return (
    <div className="chat-widget">
      <button className="toggle-btn" onClick={() => setOpen(!open)}>💬 Chat</button>

      {open && (
        <div className="chat-box">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === selfSocketId ? "sent" : "received"}>
                {msg.message}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
