import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { signup } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password' && passwordError) {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }

    if (!formData.username || !formData.email || !formData.password) {
      toast.error('Please fill out all fields.');
      return; 
    }

    setLoading(true); 
    try {
      await signup(formData.username, formData.email, formData.password);
    } catch (error) {
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 border rounded shadow-md w-[370px]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Sign Up</h2>
        <div className="flex flex-col">
          <div className="mb-3">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username} 
              onChange={handleChange}
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} 
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password} 
              onChange={handleChange}
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <p className="flex items-center gap-1">
          Already have an account?{" "}

            <Link to={'/login'} className="text-blue-600 underline font- cursor-pointer">
              login
            </Link>
          </p>
          <button
            type="submit"
            disabled={loading} 
            className={`w-full py-2 px-4 my-10 rounded ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white transition duration-200`}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
