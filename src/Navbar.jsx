import React from 'react';
import {  NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <header>
      <nav  className="bg-white z-10 border-2 flex justify-around items-center py-[20px]  fixed top-0 w-full">
        <div className="logo">
        <NavLink to="/" > <img src="/images/logo.svg" className="w-[140px]" alt="Company Logo" /> </NavLink>
        </div>
        <ul className="flex gap-10 items-center text-base text-[#666] font-normal"> 
        <li className="hidden md:inline">Signup</li> 
          <li className="hidden md:inline"><NavLink to="/about"className={({ isActive }) => (isActive ? "text-orange-400" : "")}>About</NavLink></li>
          <li className="hidden md:inline"><NavLink to="/product"className={({ isActive }) => (isActive ? "text-orange-400" : "")}>Products</NavLink></li>
          <li className="hidden md:inline"><NavLink to="/support"className={({ isActive }) => (isActive ? "text-orange-400" : "")}>Support</NavLink></li>
          <li className="hidden md:inline"><NavLink to="/pricing"className={({ isActive }) => (isActive ? "text-orange-400" : "")}>Pricing</NavLink></li>
          <li className="md:hidden">
            <i className="fa-solid fa-bars fa-lg"></i>
          </li>
        </ul>
      </nav>
       <br /> <br />
    </header>
  );
}

export default Navbar;
