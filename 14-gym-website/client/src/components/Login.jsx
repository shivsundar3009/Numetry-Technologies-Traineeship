import React, { useState } from 'react';
import axios from 'axios';
import loginImage from "../assets/login.jpg";
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', formData);
      console.log(response.data);
      if (response.data.role === 'user') {
        navigate('/user'); // Navigate to the user dashboard if the role is user
      } else if (response.data.role === 'admin') {
        navigate('/admin'); // Navigate to the admin dashboard if the role is admin
      } else {
        console.error('Invalid role:', response.data.role);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <Header />
      <div style={{backgroundImage: `url(${loginImage})`}} className='flex flex-col justify-around items-center p-28 '>
        <div className="bg-yellow-300 p-10 w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
