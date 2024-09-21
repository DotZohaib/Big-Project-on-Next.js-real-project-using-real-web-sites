"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className="relative">
            <button
                onClick={handleDropdown}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition"
                type="button"
            >
                {dropdown ? 'Close Menu' : 'Open Menu'}
            </button>

            <ul
                className={`absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md transition-transform transform ${dropdown ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${dropdown ? 'block' : 'hidden'}`}
                style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}
            >
                <li className="border-b last:border-b-0">
                    <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</Link>
                </li>
                <li className="border-b last:border-b-0">
                    <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About</Link>
                </li>
                <li className="border-b last:border-b-0">
                    <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</Link>
                </li>
                <li className="border-b last:border-b-0">
                    <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</Link>
                </li>
                <li>
                    <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
