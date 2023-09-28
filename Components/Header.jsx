"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="w-full max-w-7xl">
        <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <Link href="" className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">TECHONE</Link>
            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}  // Close dropdown on mouse leave
            >
              {/* You can add an SVG or any other icon for the button */}
              Dropdown Icon
            </button>
          </div>

          <nav className="flex-col items-center flex-grow hidden pb-4 border-blue-600 md:pb-0 md:flex md:justify-start md:flex-row lg:border-l-2 lg:pl-2 pr-10 ">
            {/* Other navigation links */}
            <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pl-10 pr-10' >Home</Link>
            <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pr-10' >Courses</Link>
            <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pr-10' >About Us</Link>
            <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pr-10' >Contact Us</Link>

            <div className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >

              <button
                className="flex flex-row items-center w-full px-4 py-2 mt-2 font-medium text-left text-black md:w-auto md:inline md:mt-0 hover:text-red-300 focus:outline-none focus:shadow-outline"


              >
                <span>Dropdown List</span>
              </button>
             
              {isDropdownOpen && (
                <div className="  absolute right-0  w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 top-6">
                  <div className="px-2 py-2 bg-white rounded-md shadow flex flex-col items-center"
                  
                  >
                    {/* Dropdown links */}
                    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pb-2' >Branding</Link>
                    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pb-2' >Branding</Link>
                    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pb-2' >Branding</Link>
                    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300 pb-2' >Branding</Link>
                  </div>
                </div>
              )}
            </div>
          </nav>



          <div className="inline-flex items-center gap-10 list-none lg:ml-auto">
            <button className="items-center block px-10 py-2.5 text-base font-medium text-center hover:bg-red-300 hover:text-white text-blue-600 transition duration-300 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:scale-125 ">
              Sign in
            </button>
            <button className="items-center block px-10 py-3 text-base  text-center text-white transition duration-600 ease-in-out hover:scale-125 duration-300 transform bg-blue-600 rounded-xl hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
