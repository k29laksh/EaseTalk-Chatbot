import React, { useEffect, useRef } from 'react';

const ConversationWindow = ({ conversation }) => {
  const conversationEndRef = useRef(null); 
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="flex-grow  bg-gray-50 px-6 py-4 overflow-y-auto">
      {conversation?.length===0 &&   <div className="text-center  md:w-1/2 py-10  m-auto">
          <div className="text-3xl sm:text-5xl lg:text-6xl flex flex-col font-semibold">Welcome to EaseTalk <span className='text-blue-700'>AI Chatbot</span></div>
          <div className="text-sm sm:text-base text-gray-800 mt-4 ">
          EaseTalk is your AI assistant for seamless conversations. Whether you need info, a casual chat, or help with a problem, we're here to assist.
          </div>
        </div>}
      { conversation?.map((msg, index) => (
        <div
          key={index}
          className={`mb-4 p-4 rounded-lg ${
            msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
          } shadow-lg`}
        >
         
          <p>{msg.message}</p>
        </div>
      ))}
      <div ref={conversationEndRef}></div> 
    </div>
  );
};

export default ConversationWindow;
