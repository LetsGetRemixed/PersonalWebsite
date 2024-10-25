import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t-2">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          {/* Logo / Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Colby Person</h2>
            <p className="text-sm text-gray-400">Software Engineer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="/projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="/resume" className="text-gray-300 hover:text-white transition">Resume</a>
            <a href="/education" className="text-gray-300 hover:text-white transition">Education</a>
            <a href="/bio" className="text-gray-300 hover:text-white transition">Bio</a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-700 my-4" />

        {/* Bottom Section: Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Colby Person. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:colbyperson14@gmail.com" className="text-gray-300 hover:text-teal-400 transition">
              <i className="bi bi-envelope-fill"></i> Email
            </a>
            <a href="https://github.com/LetsGetRemixed" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition">
              <i className="bi bi-github"></i> GitHub
            </a>
                <a href="https://www.linkedin.com/in/colby-person-51820930a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-teal-400 transition flex items-center">
                <FaLinkedin className="text-xl mr-2" /> {/* LinkedIn Icon */}
                LinkedIn
                </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
