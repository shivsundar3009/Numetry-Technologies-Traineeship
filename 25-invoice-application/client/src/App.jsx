import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [soldBy, setSoldBy] = useState('');
  const [invoice, setInvoice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInvoice = {
      clientName,
      clientEmail,
      productName,
      price: Number(price),
      soldBy,
    };

    try {
      const response = await axios.post('http://localhost:3000/invoice', newInvoice);
      setInvoice(response.data);
      setIsModalOpen(true);
      setClientName('');
      setClientEmail('');
      setProductName('');
      setPrice('');
      setSoldBy('');
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Invoice</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Client Name</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Client Email</label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sold By</label>
          <input
            type="text"
            value={soldBy}
            onChange={(e) => setSoldBy(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Invoice
        </button>
      </form>

      {isModalOpen && invoice && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Invoice Details</h3>
                    <div className="mt-2">
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-md font-medium text-gray-900">Client Information</h4>
                        <p className="text-sm text-gray-500"><strong>Name:</strong> {invoice.clientName}</p>
                        <p className="text-sm text-gray-500"><strong>Email:</strong> {invoice.clientEmail}</p>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-md font-medium text-gray-900">Product Information</h4>
                        <p className="text-sm text-gray-500"><strong>Product Name:</strong> {invoice.productName}</p>
                        <p className="text-sm text-gray-500"><strong>Price:</strong> ${invoice.price.toFixed(2)}</p>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-md font-medium text-gray-900">Sold By</h4>
                        <p className="text-sm text-gray-500">{invoice.soldBy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" onClick={closeModal} className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
