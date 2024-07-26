import React, { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

const responses = {
  "hello": "Hi there! How can I assist you today?",
  "how are you": "I'm just a bot, but I'm doing well! How about you?",
  "bye": "Goodbye! Have a great day!",
  // Add more responses as needed
};

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, type: 'user' }]);

    // Simulate LLM response
    const response = responses[message.toLowerCase()] || "Sorry, I don't understand.";
    setMessages([...messages, { text: message, type: 'user' }, { text: response, type: 'bot' }]);
  };

  return (
    <div>
      <div style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} type={msg.type} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default Chatbot;
