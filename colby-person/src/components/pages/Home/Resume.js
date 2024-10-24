import React from 'react';

function Resume() {
  const handleDownload = () => {
    window.open('/Resumeforwebsite.pdf', '_blank');
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Resume Highlights</h2>

      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* PDF Preview Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <iframe 
            src="/Resumeforwebsite.pdf" 
            className="w-11/12 h-96 md:h-[600px] border-0 rounded-lg shadow-md"
            title="Resume Preview"
          />
        </div>

        {/* Info and Buttons */}
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="text-lg mb-6 text-gray-300 text-center md:text-left">
            Experienced Software Engineer with a passion for building innovative solutions. Skilled in web development, application design, and team collaboration.
          </p>

          {/* Key Skills Section */}
          <div className="mb-6">
            <div className="p-4 bg-gray-700 rounded-md shadow">
              <h3 className="text-xl font-semibold">Key Skills</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>JavaScript & React</li>
                <li>Node.js & Express</li>
                <li>HTML, CSS & Tailwind CSS</li>
                <li>Database Management (MongoDB, SQL)</li>
                <li>Java, C++, C#, Python</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-700 rounded-md shadow mt-4">
              <h3 className="text-xl font-semibold">Experience</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>4+ Years in Software Development</li>
                <li>Projects ranging from small apps to full-scale systems</li>
                <li>Experience leading development teams</li>
                <li>Founded Website Company with 1 other developer</li>
              </ul>
            </div>

           
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-centerspace-x-6">
            <button
              onClick={handleDownload}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition"
            >
              Download Resume
            </button>
            <a
              href="/resume"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;


