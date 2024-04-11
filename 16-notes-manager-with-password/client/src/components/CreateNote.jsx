import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/v1/create/note', { title, content, password });
      // Reset form fields
      setTitle('');
      setContent('');
      setPassword('');
      // Navigate back to home page
      navigate('/');
    } catch (error) {
      console.error('Error creating note:', error);
      // Handle error if needed
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Create Note</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3"></textarea>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Create</button>
      </form>
    </div>
  );
};
