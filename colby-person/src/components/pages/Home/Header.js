import React from 'react';

function Header() {
  return (
    <header className="relative bg-gray-800 text-white py-20 pt-32 border-b-2">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-teal-800 opacity-75"></div>

      <div className="relative container mx-auto flex flex-col items-center justify-center text-center">
        {/* Profile Picture */}
        <img 
          src="Self-Pic.jpg" 
          alt="Profile" 
          className="w-56 h-56 rounded-full border-4 border-white mb-6 shadow-2xl object-cover object-center transition transform hover:scale-105 hover:shadow-lg"
        />

        {/* Name and Profession */}
        <h1 className="text-5xl font-firacode font-bold mb-2 text-white drop-shadow-lg">
          Colby Person
        </h1>
        <p className="text-xl font-medium text-gray-300 mb-4 drop-shadow-md">
          Software Engineer
        </p>
        <p className="text-lg text-gray-400 font-firacode mb-2">
          Strong Passion for Coding.
        </p>
        <p className="text-lg text-gray-400 font-firacode">
          Innovate, Learn, and Excel.
        </p>

       {/* Social Media Icons */}
            <div className="flex justify-center space-x-10 mt-8">
                    <a 
                        href="https://github.com/LetsGetRemixed" 
                        className="p-3 rounded-full bg-gradient-to-br from-white to-gray-200 text-white hover:bg-teal-600 transition transform hover:scale-110 shadow-lg flex items-center justify-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src='/icons/github.png' alt="GitHub" className="w-8 h-8" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/colby-person-51820930a/" 
                        className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:bg-blue-700 transition transform hover:scale-110 shadow-lg flex items-center justify-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src='/icons/linkedin.png' alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a 
                        href="mailto:colbyperson14@gmail.com" 
                        className="p-3 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white hover:bg-red-600 transition transform hover:scale-110 shadow-lg flex items-center justify-center"
                    >
                        <img src='/icons/gmail.png' alt="Gmail" className="w-8 h-8" />
                    </a>
            </div>

      </div>
    </header>
  );
}

export default Header;

