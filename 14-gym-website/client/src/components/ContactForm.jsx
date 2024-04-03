import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import contact from "../assets/contact.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      console.log(response.data); // Log the response from the server
      // Optionally, you can display a success message or redirect the user after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error - display an error message or handle it in another appropriate way
    }
  };

  return (

    <>
    

    <Header/>
    
   
    <div className="bg-cover bg-center bg-fixed bg-opacity-50 flex flex-col justify-around  h-screen" style={{backgroundImage: `url(${contact})`}}>
      <div className=" flex justify-center m-10 items-center">
        <div className="flex flex-col items-center bg-white w-1/3 p-5">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded bg-gray-100"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="h-96">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14723.77939629131!2d75.8670525!3d22.6930969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4f019f03d%3A0x171d310ff5db237f!2sGolds%20Gym!5e0!3m2!1sen!2sin!4v1712130852283!5m2!1sen!2sin" width="600" height="450" loading="lazy" 
      className='w-full'
      >

      </iframe>
      </div>
    </div>



    </>
  );
};

export default ContactForm;
