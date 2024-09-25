import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';  
import { UserProvider } from './context/UserContext'; 
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import PrivateRoute from './Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="flex flex-col h-screen">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <ToastContainer position="top-right" autoClose={5000} />
      </UserProvider>
    </Router>
  );
}

export default App;
