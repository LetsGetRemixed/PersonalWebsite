import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-transparent backdrop-blur-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src='signature.png' alt="Logo" className="w-48 h-16 mr-3" />
          
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="text-white hover:text-teal-400 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className="text-white hover:text-teal-400 transition duration-300"
          >
            Projects
          </Link>
          <Link 
            to="/resume" 
            className="text-white hover:text-teal-400 transition duration-300"
          >
            Resume
          </Link>
          <Link 
            to="/education" 
            className="text-white hover:text-teal-400 transition duration-300"
          >
            Education
          </Link>
          <Link 
            to="/bio" 
            className="text-white hover:text-teal-400 transition duration-300"
          >
            Bio
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button id="menu-btn" className="text-white hover:text-teal-400">
            <i className="bi bi-list text-3xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden bg-gray-900 text-white hidden flex-col space-y-4 py-4 px-6">
        <Link to="/" className="hover:text-teal-400 transition duration-300">
          Home
        </Link>
        <Link to="/projects" className="hover:text-teal-400 transition duration-300">
          Projects
        </Link>
        <Link to="/resume" className="hover:text-teal-400 transition duration-300">
          Resume
        </Link>
        <Link to="/education" className="hover:text-teal-400 transition duration-300">
          Education
        </Link>
        <Link to="/bio" className="hover:text-teal-400 transition duration-300">
          Bio
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
