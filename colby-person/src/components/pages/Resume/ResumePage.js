import React from 'react';
import Footer from '../Universal/Footer';
import Navbar from '../Universal/Navbar';

function ResumePage() {
  return (
    <div className="font-firacode">
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen py-10 pt-24 px-4 md:px-20 font-firacode">
        <h1 className="text-4xl font-bold text-center mb-4">My Resume</h1>

        {/* Description Under Title */}
        <p className="text-lg text-gray-300 text-center mb-8">
          Experienced Software Engineer with a strong passion for coding and building innovative solutions.
          Below is my full resume, where you can learn more about my skills, experience, and projects.
        </p>

        {/* PDF Preview Section */}
        <div className="flex justify-center mb-8">
          <iframe
            src="/ColbyPersonResume.pdf"
            className="w-full max-w-4xl h-[800px] border-0 rounded-lg shadow-md"
            title="Resume Preview"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-6">
          <a
            href="/ColbyPersonResume.pdf"
            download="Colby_Person_Resume.pdf" // Name the file on download
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition"
          >
            Download Resume
          </a>
          <a
            href="/ColbyPersonResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition"
          >
            View Full PDF
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResumePage;
