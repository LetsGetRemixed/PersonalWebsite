import React from 'react';

function Resume() {
    const handleDownload = () => {
        window.open('/Resumeforwebsite.pdf', '_blank');
      };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Resume Highlights</h2>

      {/* PDF Preview Section */}
      <div className="flex justify-center mb-6">
        <iframe 
          src="/Resumeforwebsite.pdf" // Ensure the path is correct
          className="w-full max-w-lg h-64 border-0 rounded-lg shadow-md"
          title="Resume Preview"
        />
      </div>

      <p className="text-lg mb-6 text-gray-300 text-center">
        Experienced Software Engineer with a passion for building innovative solutions. Skilled in web development, application design, and team collaboration.
      </p>
      
      {/* Key Skills Section */}
      <div className="flex flex-wrap justify-center mb-6">
        <div className="m-4 p-4 bg-gray-700 rounded-md shadow">
          <h3 className="text-xl font-semibold">Key Skills</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>JavaScript & React</li>
            <li>Node.js & Express</li>
            <li>HTML, CSS & Tailwind CSS</li>
            <li>Database Management (MongoDB, SQL)</li>
          </ul>
        </div>
        <div className="m-4 p-4 bg-gray-700 rounded-md shadow">
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>3+ Years in Software Development</li>
            <li>Projects ranging from small apps to full-scale systems</li>
            <li>Experience leading development teams</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-6">
        <button
          onClick={handleDownload}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition"
        >
          Download Resume
        </button>
        <a
          href="/resume" // Replace with your actual resume page route
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition"
        >
          View PDF
        </a>
      </div>
    </div>
  );
}

export default Resume;

