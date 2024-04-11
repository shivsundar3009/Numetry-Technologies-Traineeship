import React, { useState } from 'react';
import axios from 'axios';

const NoteFormModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || { title: '', content: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your API endpoint to send form data to the backend
      await axios.post('http://localhost:3000/api/v1/create/note', formData);
      // After successful submission, close the modal
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error if needed
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h1 className="text-3xl font-bold mb-4">Create Note</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Title" value={formData.title || ''} name="title" onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
              <textarea placeholder="Content" value={formData.content || ''} name="content" onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3"></textarea>
              <input type="password" placeholder="Password" value={formData.password || ''} name="password" onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
              <div className="flex justify-end">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Submit</button>
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md ml-2 transition duration-300" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteFormModal;
