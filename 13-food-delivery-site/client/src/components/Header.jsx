// Header.js
import img from "../assets/logo.png"
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6"

import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-around items-center">
            {/* Logo */}
            <div>
                <img src={img} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Location Selector */}
            <div className="flex items-center space-x-4">
            <FaLocationDot className="text-red-500"/>
                <select className="bg-gray-800 text-white px-3 py-2 rounded">
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    {/* Add more cities here */}
                </select>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Restaurant or dish or category"
                    className="bg-gray-800 text-white px-3 py-2 rounded w-72"
                />
            </div>

            {/* Login and Signup */}
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4"> <Link to = "/login"> Login</Link> </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded"><Link to = "/registration"> SignUP</Link> </button>
            </div>
        </header>
    );
};

export default Header;
