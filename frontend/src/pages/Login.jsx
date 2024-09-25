import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please fill out all fields.');
    } else {
      setLoading(true); 
      try {
        await login(formData.email, formData.password);
      } catch (error) {
      }
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white border p-6 rounded shadow-md w-[370px]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Log In</h2>
        <div className="flex flex-col">
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
          </div>
          <button
            type="submit"
            disabled={loading} 
            className={`w-full py-2 px-4 my-10 rounded ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white transition duration-200`}
          >
            {loading ? 'Logging in...' : 'Log In'} 
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
