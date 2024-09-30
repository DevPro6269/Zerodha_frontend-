import React from 'react';
import "../index.css";


function Navbar() {
  return (
    <header>
      <nav  className="bg-white border-2 flex justify-around items-center py-[20px]  fixed top-0 w-full">
        <div className="logo">
          <img src="/images/logo.svg" className="w-[140px]" alt="Company Logo" />
        </div>
        <ul className="flex gap-10 items-center text-base text-[#666] font-normal">
          <li className="hidden md:inline">Signup</li>
          <li className="hidden md:inline">About</li>
          <li className="hidden md:inline">Products</li>
          <li className="hidden md:inline">Support</li>
          <li className="hidden md:inline">Pricing</li>
          <li className="md:hidden">
            <i className="fa-solid fa-bars fa-lg"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
