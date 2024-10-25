import React from 'react';
import { useNavigate } from 'react-router-dom';
import projectData from '../Projects/Projectdata';
import Navbar from '../Universal/Navbar';
import { FaHome } from 'react-icons/fa';
import Footer from '../Universal/Footer';

function ProjectsPage() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="font-firacode">
      <Navbar />
      <div className="bg-gray-900 text-white py-10 px-4 md:px-20 min-h-screen pt-24 font-firacode relative">
        
        {/* Page Title and Home Button Container */}
        <div className="container mx-auto flex items-center justify-between mb-10">
          {/* Back to Home Button */}
          <button 
            onClick={() => navigate('/')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold p-2 rounded-full transition transform hover:scale-105 shadow-md flex items-center justify-center"
          >
            <FaHome className="text-sm md:text-base" />
            <span className="hidden md:inline ml-2">Home</span>
          </button>
          
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mx-auto bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h1>
        </div>

        {/* Project Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectData.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 border border-gray-700 hover:border-teal-500 group"
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image */}
                <img 
                  src={project.showcaseImage1} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
                />
                
                {/* Project Info */}
                <div className="p-4 border-t border-gray-700 group-hover:border-teal-500">
                  <h2 className="text-2xl font-bold mb-2 text-teal-400 group-hover:text-teal-300 transition duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;


