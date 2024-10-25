import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
            <Link to="/">
                <img src='/signature.png' alt="Logo" className="w-48 h-16 mr-3 cursor-pointer" />
            </Link>
            </div>

        {/* Desktop Menu */}
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
          <button onClick={toggleMenu} className="text-white hover:text-teal-400">
            <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'} text-3xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white flex flex-col space-y-4 py-4 px-6">
          <Link 
            to="/" 
            className="hover:text-teal-400 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className="hover:text-teal-400 transition duration-300"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link 
            to="/resume" 
            className="hover:text-teal-400 transition duration-300"
            onClick={toggleMenu}
          >
            Resume
          </Link>
          <Link 
            to="/education" 
            className="hover:text-teal-400 transition duration-300"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link 
            to="/bio" 
            className="hover:text-teal-400 transition duration-300"
            onClick={toggleMenu}
          >
            Bio
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


