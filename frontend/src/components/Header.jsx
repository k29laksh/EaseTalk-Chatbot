import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem('user'); 
    navigate('/login'); 
  };

  return (
    <div className="flex justify-between sticky top-0 items-center bg-blue-600 text-white py-4 px-8 shadow-md">
      <div className="font-semibold py-2 px-4 text-2xl cursor-pointer">EaseTalk</div>
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link to="/login" className=" ">Login</Link>
            <Link to="/signup" className=" ">Signup</Link>
          </>
        ) : (
          <>
            <span className=" ">Hello, {user.username}</span>
            <button
              className="bg-white text-blue-600 font-medium py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
