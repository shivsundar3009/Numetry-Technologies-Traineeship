import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p>Amazon.in clone is a project created for educational purposes. It is not affiliated with or endorsed by Amazon.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h3 className="text-xl font-semibold mb-4">Help</h3>
          <ul>
            <li><a href="#" className="block mb-2">Your Account</a></li>
            <li><a href="#" className="block mb-2">Orders</a></li>
            <li><a href="#" className="block mb-2">Returns & Refunds</a></li>
            <li><a href="#" className="block mb-2">Customer Service</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <ul>
            <li><a href="#" className="block mb-2">Facebook</a></li>
            <li><a href="#" className="block mb-2">Twitter</a></li>
            <li><a href="#" className="block mb-2">Instagram</a></li>
            <li><a href="#" className="block mb-2">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; Shivsundar {new Date().getFullYear()} Amazon.in Clone</p>
      </div>
    </footer>
  );
};

export default Footer;