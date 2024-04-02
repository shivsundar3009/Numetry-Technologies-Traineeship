import React, { useState } from 'react';
import axios from 'axios';
import signup from "../assets/signup.jpg"
import Header from './Header';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user' // Default role is set to 'user'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData); // Change the API endpoint accordingly
      console.log(response.data); // Handle success response accordingly
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error response accordingly
    }
  };

  return (

    <>
    
    <Header/>
    
    

    <div style={{backgroundImage: `url(${signup})`}} className='h-5/6 flex justify-center items-center p-11'>


    
    <div className=" bg-yellow-300 p-10 w-1/2" >
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Signup</button>
      </form>
    </div>

    </div>

    </>
  );
};

export default Signup;
