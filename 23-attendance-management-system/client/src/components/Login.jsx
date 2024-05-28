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
      <div className="border-red-500 border-4 bg-white p-8 rounded shadow-lg">
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
          <p className="mb-1 font-medium text-gray-500">Select Your Role</p>
    <div className="ROLE-DIV mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" value="admin" onChange={(e) => {
          setRole(e.target.value)
          console.log(e.target.value)
          }} name="radio" id="radio1"/>
        <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio1"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
        <span className="pointer-events-none z-10">Admin</span>
      </div>
      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" value={'student'} onChange={(e) => {
          setRole(e.target.value)
          console.log(e.target.value)
          }} name="radio" id="radio2"/>
        <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio2"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
        <span className="pointer-events-none z-10">Student</span>
      </div>
      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" id="radio3" name = "radio" value={'parent'} onChange={(e) => {
          setRole(e.target.value)
          console.log(e.target.value)
          }}/>
        <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio3"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
        <span className="pointer-events-none z-10">Parent</span>
      </div>
      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" name="radio" id="radio4" value={'staff'} onChange={(e) => {
          setRole(e.target.value)
          console.log(e.target.value)
          }}/>
        <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio4"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
        <span className="pointer-events-none z-10">Staff</span>
      </div>
    </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
