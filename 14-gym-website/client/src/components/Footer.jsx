import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Email: info@gymexample.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Gym Street, City, Country</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
            <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
            <p>Saturday: 8:00 AM - 8:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.04 7.72 8.35a10.88 10.88 0 0 1-1.54-5.53c.26-2.02 1.18-3.85 2.58-5.24C9.82 9.9 8.5 11.85 8.5 14c0 .28.02.56.05.84-2.34-.11-4.42-1.24-5.86-2.96-.24.41-.38.88-.38 1.39 0 .96.49 1.8 1.22 2.29-.45-.02-.88-.14-1.25-.36v.04c0 1.34.96 2.46 2.24 2.72-.23.06-.47.09-.72.09-.18 0-.36-.02-.53-.05.36 1.12 1.41 1.93 2.66 1.95a5.55 5.55 0 0 1-3.46 1.19c-.22 0-.44 0-.66-.03a7.83 7.83 0 0 0 4.2 1.22c5.1 0 7.89-4.23 7.89-7.89l-.01-.36C20 6.48 15.52 2 12 2z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.62 15.5H8.38c-.68 0-1.25-.56-1.25-1.25v-5.25h2.5v2.22c0 .31.25.56.56.56h2.19c.31 0 .56-.25.56-.56v-2.22h2.5l-.01 5.25c0 .69-.57 1.25-1.25 1.25zm1.25-8.75h-5v-2.5c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v2.5z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-1.5 16.44v-9l6 4.5-6 4.5z"/>
                  <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Gold's Gym. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
