import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://easetalk-chatbot.onrender.com/api/v1/users/login', { email, password });
      setUser(response.data);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const signup = async (username, email, password) => {
    try {
      await axios.post('https://easetalk-chatbot.onrender.com/api/v1/users/signup', { username, email, password });
      toast.success('Signup successful! Please log in.');
      navigate('/login');
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully!');
  };

  return (
    <UserContext.Provider value={{ user,setUser, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};
