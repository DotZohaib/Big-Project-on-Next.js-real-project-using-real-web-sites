"use client"

import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaCogs, FaBlog, FaPhone, FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import ShiptCard from "./Shipt-card"
// import {modTogle} from "./theme_btn"


const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleSidebar = () => {
      setSidebar(!sidebar);
  };



  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  return (
  
     

  <header className="relative bg-white">
    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
       <button onClick={handleSidebar} type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div className="ml-4 flex lg:ml-0">
            <Link href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/image/logo.png" alt=""/>
            </Link>
          </div>

          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              <div className="flex">
                <div className="relative flex">
                <Link href={"/"} className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Home</Link>
                </div>

               
              </div>
              <div className="flex">
                <div className="relative flex">
                  <Link href={"/about"} className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">About</Link>
                </div>

               
               
              </div>

              <Link href="/product" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Products</Link>
              <Link href="/contact" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact</Link>
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <Link href="signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
            </div>

            <div className="hidden lg:ml-8 lg:flex">
              <Link href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                <img src="data:image/png;base64,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" alt="" className="block h-auto w-5 flex-shrink-0"/>
                <span className="ml-3 block text-sm font-medium">PAK</span>
                <span className="sr-only">, change currency</span>
              </Link>
            </div>

            <div className="relative flex lg:ml-6">
      <Link href="#" className="p-2 text-gray-400 hover:text-gray-500" onClick={handleIconClick}>
        <span className="sr-only">Search</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </Link>
      <div
        id="inputWrapper"
        className={`absolute ${showInput ? 'top-[50px] right-[50px] translate-x-[-50%] translate-y-[-50%] z-10' : 'hidden'} transition-transform duration-300`}
        style={{ transform: 'translateX(50%)' }}
      >
        <input
          id="input"
          className="truncate p-2 border bg-blue-700 text-white rounded shadow-md"
          type="search"
          autoComplete="off"
          spellCheck="false"
          role="combobox"
          aria-controls="matches"
          aria-expanded={showInput}
          aria-live="polite"
          placeholder="Search..."
        />
        <cr-realbox-icon
          id="icon"
          in-searchbox=""
          expanded-state-icons-chrome-refresh=""
          background-image=""
          mask-image="url(//resources/cr_components/searchbox/icons/search_cr23.svg)"
        ></cr-realbox-icon>
        <button id="voiceSearchButton" className="realbox-icon-button" title="Search by voice"></button>
        <button id="lensSearchButton" className="realbox-icon-button" title="Search by image"></button>
        <cr-realbox-dropdown
          id="matches"
          role="listbox"
          hidden=""
          chrome-refresh-hover-shape=""
          expanded-state-layout-chrome-refresh=""
        ></cr-realbox-dropdown>
      </div>
    </div>



            <div className="ml-4 flow-root lg:ml-6">
              <Link href="#" className="group  -m-4  z-20 flex items-center p-2">
                <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path  strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div className="ml-0 text-sm font-medium text-gray-700 group-hover:text-gray-800"></div>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            <div className="z-50 -mt-6 text-xs">
            <ShiptCard/>
            </div>
             
            </div>
          </div>
          </div>
          </div>
        
    </nav>


{/* Mobile Sidebar */}
<nav className={`fixed z-40 top-0 left-0 w-full text-2xl font-semibold text-black h-full bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg flex flex-col px-10 pt-10   transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <div className='flex justify-end w-full p-4'>
        <RxCrossCircled onClick={handleSidebar} className='text-3xl text-black -pr-5 cursor-pointer hover:text-gray-300 transition-colors duration-200' />
    </div>
    <ul className='flex flex-col gap-6 text-gray-600'>
        <li className='flex items-center gap-2'>
            <FaHome className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/">Home</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaCogs className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/product">Products</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaBlog className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/about">About</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaPhone className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/contact">Contact</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaLock className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/privacy">Privacy</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaEnvelope className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/messages">Messages</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaUser className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/profile">Profile</Link>
        </li>
    </ul>
    <div className='absolute bottom-10 w-full ml-0 flex items-center justify-center'>
        <Link href="/profile" className='flex justify-center -ml-9 items-center gap-2 text-gray-600 text-lg font-semibold hover:text-gray-300 transition-colors duration-200'>
            <FaUser className='text-xl' />
            Profile
        </Link>
    </div>
</nav>


  </header>


  );
};

export default Navbar;
