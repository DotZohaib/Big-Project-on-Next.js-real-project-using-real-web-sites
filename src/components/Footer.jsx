"use client"
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur-sm border-t border-gray-300 ">
      

    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">ZenZone™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link href="/product" className="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  );
};

export default Footer;
