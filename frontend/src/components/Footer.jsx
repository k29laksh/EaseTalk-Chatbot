import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSend } from "react-icons/fi";
import ConversationWindow from './ConversationWindow'; 

const Chat = () => {
  const [userInput, setUserInput] = useState(''); 
  const [conversation, setConversation] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const savedConversation = localStorage.getItem('conversation');
    if (savedConversation) {
      setConversation(JSON.parse(savedConversation));
    }
  }, []);

  useEffect(() => {
    if (conversation.length > 0) {
      const recentConversations = conversation.slice(-10); 
      localStorage.setItem('conversation', JSON.stringify(recentConversations));
    }
  }, [conversation]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newConversation = [...conversation, { sender: 'user', message: userInput }];
    setConversation(newConversation);
    setUserInput(''); 
    setIsLoading(true); 
    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', { message: userInput });
      const aiResponse = response.data.response;

      setConversation([...newConversation, { sender: 'ai', message: aiResponse }]);
    } catch (error) {
      console.error('Error in fetching AI response:', error);
      setConversation([...newConversation, { sender: 'ai', message: 'Error fetching response.' }]);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleSendIconClick = () => {
    if (!isLoading) {
      handleSendMessage();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ConversationWindow conversation={conversation} />

      <div className="bg-blue-600 flex text-white justify-center md:justify-between items-center py-4 px-8">
      <button className="hidden md:block text-white font-medium cursor-pointer">
        Contact Us
      </button>
        <div className="w-full sm:w-[85%] md:w-[40%] flex items-center">
          <input
            type="text"
            placeholder="Chat with AI ..."
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="w-full p-3 rounded outline-none text-sm text-gray-800 border-blue-400"
            disabled={isLoading} 
          />
          <FiSend className="relative cursor-pointer text-blue-600 right-9 z-20" size={22} onClick={handleSendIconClick} />
        </div>
        <button className="bg-white cursor-pointer hidden md:block text-blue-600 font-medium py-2 px-4 rounded">
        Feedback
      </button>
      </div>
    </div>
  );
};

export default Chat;
