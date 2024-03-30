// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img from "../assets/New folder/zomato-bg.jpg"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data.message); // Login success message
    } catch (error) {
      console.error('Login error:', error.response.data.message);
    }
  };

  return (
     <div className='h-screen p-10 ' style={{backgroundImage: `url(${img})`}}>


      <div className="max-w-md mx-auto bg-white  p-6 border rounded shadow-lg">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="w-full mb-4 p-2 border rounded" type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
        <input className="w-full mb-4 p-2 border rounded" type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Login</button>
      </form>
      <p className="mt-4">Don't have an account? <Link to="/registration" className="text-blue-500">Register</Link></p>
    </div>
     </div>
    
  );
};

export default Login;
