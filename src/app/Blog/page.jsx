"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';

const Blog = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div>
            {/* Desktop Navigation */}
            <nav className='w-full h-20 bg-slate-500 flex flex-wrap justify-center items-center'>
                <div className='flex justify-end items-end w-full md:hidden'>
                    <IoMenu   className='text-2xl h-14 w-auto px-4 mt-2 cursor-pointer' />
                </div>
                <ul className={`flex flex-wrap gap-3 justify-center items-center ${sidebar ? 'hidden' : ''}`}>
                    <li><Link className='hidden md:block' href="/">About</Link></li>
                    <li><Link className='hidden md:block' href="/services">Services</Link></li>
                    <li><Link className='hidden md:block' href="/blog">Blog</Link></li>
                    <li><Link className='hidden md:block' href="/contact">Contact</Link></li>
                    <li><Link className='hidden md:block' href="/privacy">Privacy</Link></li>
                </ul>
            </nav>

            {/* Mobile Sidebar */}
            <nav className={`fixed top-0 left-0 w-full h-full bg-slate-500 flex flex-col items-center justify-center transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
                <div className='flex justify-end items-end w-full'>
                    <RxCrossCircled onClick={handleSidebar} className='text-2xl h-14 w-auto px-4 mt-2 cursor-pointer' />
                </div>
                <ul className='flex flex-col gap-3'>
                    <li><Link className='text-center text-white' href="/">About</Link></li>
                    <li><Link className='text-center text-white' href="/services">Services</Link></li>
                    <li><Link className='text-center text-white' href="/blog">Blog</Link></li>
                    <li><Link className='text-center text-white' href="/contact">Contact</Link></li>
                    <li><Link className='text-center text-white' href="/privacy">Privacy</Link></li>
                </ul>
            </nav>

        </div>
    );
}

export default Blog;
