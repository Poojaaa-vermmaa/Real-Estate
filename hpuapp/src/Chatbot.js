import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you today?', isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([
      ...messages,
      { text: newMessage, isUser: true },
      { text: 'I received your message: ' + newMessage, isUser: false },
    ]);
    setNewMessage('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
