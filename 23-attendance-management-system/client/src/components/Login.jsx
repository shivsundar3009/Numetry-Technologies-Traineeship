// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import schoolBackground from '../assets/schoolBG.jpg'; // Import your school background image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState({
    admin: false,
    staff: false,
    student: false,
    parent: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'admin' || name === 'staff' || name === 'student' || name === 'parent') {
      setRoles({ ...roles, [name]: !roles[name] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email,
        password,
        roles
      });
      console.log(response.data); // Handle login success
    } catch (error) {
      console.error('Login failed:', error); // Handle login error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${schoolBackground})` }}>
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Welcome back to our site!</h2>
        <p className="text-gray-600 mb-4">Don't have an account? <Link to="/SignUP" className="text-blue-500 hover:underline">SignUP Here!</Link></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block">Password:</label>
            <input type="password" name="password" value={password} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block">Role:</label>
            <label className="mr-4">
              <input type="checkbox" name="admin" checked={roles.admin} onChange={handleChange} className="mr-2" />
              Admin
            </label>
            <label className="mr-4">
              <input type="checkbox" name="staff" checked={roles.staff} onChange={handleChange} className="mr-2" />
              Staff
            </label>
            <label className="mr-4">
              <input type="checkbox" name="student" checked={roles.student} onChange={handleChange} className="mr-2" />
              Student
            </label>
            <label className="mr-4">
              <input type="checkbox" name="parent" checked={roles.parent} onChange={handleChange} className="mr-2" />
              Parent
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
