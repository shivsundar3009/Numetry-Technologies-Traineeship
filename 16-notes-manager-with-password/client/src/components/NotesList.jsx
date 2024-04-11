// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const NotesList = () => {
  // State variables for managing notes, delete modal, update modal, and form data
  const [notes, setNotes] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [createForm, setCreateForm] = useState({ title: '', content: '', password: '' });
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateForm, setUpdateForm] = useState({ id: '', title: '', content: '', password: '' });
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to fetch notes from the API
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/get/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // Function to handle deleting a note
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/v1/delete/note/${deleteNoteId}`, { data: { password } });
      console.log(res.data);
      // Update the notes list after deleting the note
      fetchNotes();
      // Close the modal after successful deletion
      setDeleteModalOpen(false);
      // Reset password and error state
      setPassword('');
      setError('');
    } catch (error) {
      console.error('Error deleting note:', error);
      setError('Error deleting note. Please try again.');
    }
  };

  // Function to open the delete modal
  const openDeleteModal = (id) => {
    setDeleteNoteId(id);
    setDeleteModalOpen(true);
  };

  // Function to close the delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    // Reset password and error state when modal is closed
    setPassword('');
    setError('');
  };

  // Function to open the create modal
  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  // Function to close the create modal
  const closeCreateModal = () => {
    setCreateModalOpen(false);
    // Reset create form data when modal is closed
    setCreateForm({ title: '', content: '', password: '' });
  };

  // Function to handle create form submission
  const handleCreateSubmit = async () => {
    try {
      // Call your API to handle form submission
      await axios.post('http://localhost:3000/api/v1/create/note', createForm);
      // Close the modal after successful submission
      closeCreateModal();
      // Fetch updated notes
      fetchNotes();
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  // Function to handle input change in the create form
  const handleCreateInputChange = (e) => {
    const { name, value } = e.target;
    setCreateForm({ ...createForm, [name]: value });
  };

  // Function to open the update modal with pre-filled data
  const openUpdateModal = (note) => {
    setUpdateForm({ id: note._id, title: note.title, content: note.content, password: '' });
    setUpdateModalOpen(true);
  };

  // Function to close the update modal
  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    // Reset update form data when modal is closed
    setUpdateForm({ id: '', title: '', content: '', password: '' });
  };

  // Function to handle update form submission
  const handleUpdateSubmit = async () => {
    try {
      // Call your API to handle form submission
      await axios.put(`http://localhost:3000/api/v1/update/note/${updateForm.id}`, updateForm);
      // Close the modal after successful submission
      closeUpdateModal();
      // Fetch updated notes
      fetchNotes();
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  // Function to handle input change in the update form
  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">All Notes</h1>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={openCreateModal}>Create Note</button>
      <ul>
        {notes.map(note => (
          <li key={note._id} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p>{note.content}</p>
            <div className="mt-2 flex justify-end">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => openDeleteModal(note._id)}>Delete</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openUpdateModal(note)}>Update</button>
            </div>
          </li>
        ))}
      </ul>

      {deleteModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Enter password to delete note</h2>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <div className="flex justify-end">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleDelete}>Delete</button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={closeDeleteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {createModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h1 className="text-3xl font-bold mb-4">Create Note</h1>
            <form onSubmit={handleCreateSubmit}>
              <input type="text" placeholder="Title" value={createForm.title} name="title" onChange={handleCreateInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
              <textarea placeholder="Content" value={createForm.content} name="content" onChange={handleCreateInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3"></textarea>
              <input type="password" placeholder="Password" value={createForm.password} name="password" onChange={handleCreateInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
              <div className="flex justify-end">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Submit</button>
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md ml-2 transition duration-300" onClick={closeCreateModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {updateModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h1 className="text-3xl font-bold mb-4">Update Note</h1>
            <form onSubmit={handleUpdateSubmit}>
              <input type="text" placeholder="Title" value={updateForm.title} name="title" onChange={handleUpdateInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
              <textarea placeholder="Content" value={updateForm.content} name="content" onChange={handleUpdateInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3"></textarea>
              <input type="password" placeholder="Password" value={updateForm.password} name="password" onChange={handleUpdateInputChange} className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3" />
              <div className="flex justify-end">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Submit</button>
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md ml-2 transition duration-300" onClick={closeUpdateModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
