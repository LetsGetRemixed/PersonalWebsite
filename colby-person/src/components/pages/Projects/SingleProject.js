import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../Projects/Projectdata';
import Footer from '../Universal/Footer';
import Navbar from '../Universal/Navbar';
import { FaArrowLeft } from 'react-icons/fa';

function SingleProject() {
  const { projectId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const navigate = useNavigate();

  // Find the project based on the ID
  const project = projectData.find((proj) => proj.id === projectId);

  // If project is not found, return a not found message
  if (!project) {
    return (
      <div className="text-center text-white py-10">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <p>Please go back and select a valid project.</p>
      </div>
    );
  }

  // Function to open the lightbox with the clicked image
  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="font-firacode">
      <Navbar />
      <div className="bg-gray-900 text-white py-10 pt-24 px-4 md:px-20 font-firacode">
        <div className="container mx-auto relative">
                    {/* Small Back Button at Top */}
            <button 
            onClick={() => navigate('/projects')}
            className="absolute top-4 left-4 md:top-0 md:left-0 md:mt-4 md:ml-4 bg-teal-500 hover:bg-teal-600 text-white font-bold p-2 rounded-full transition transform hover:scale-105 shadow-md flex items-center justify-center"
            >
            {/* Show only arrow icon on smaller screens */}
            <FaArrowLeft className="text-sm md:text-base" />
            <span className="hidden md:inline ml-2">Back</span> {/* Show text on larger screens */}
            </button>

          {/* Project Title and Type */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
            {project.type && (
              <p className="text-md text-gray-400 italic">{project.type}</p>
            )}
            {project.class && (
              <p className="text-sm text-gray-500 italic">Project done for: {project.class}</p>
            )}
          </div>

          {/* Showcase Image */}
          <div className="flex justify-center mb-8">
            <img 
              src={project.showcaseImage1} 
              alt={project.title} 
              className="w-full max-w-3xl h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Optional Buttons: View Code and View Website */}
          <div className="flex justify-center space-x-6 mt-8 pb-4">
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-2 px-6 rounded-full transition transform hover:scale-105"
              >
                View Code
              </a>
            )}
            {project.websiteurl && (
              <a 
                href={project.websiteurl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full transition transform hover:scale-105"
              >
                View Website
              </a>
            )}
          </div>

          {/* Project Description */}
          <p className="text-lg text-gray-300 mb-8 text-center">{project.description}</p>

          {/* Project Features */}
          <h2 className="text-2xl font-bold mb-4 text-teal-300 border-b-2 border-teal-500 pb-2 inline-block">
            Key Features:
          </h2>
          <ul className="list-disc list-inside text-gray-400 mb-8">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2 hover:text-teal-400 transition duration-200">
                {feature}
              </li>
            ))}
          </ul>

          {/* Technologies Used */}
          <h2 className="text-2xl font-bold mb-4 text-blue-300 border-b-2 border-blue-500 pb-2 inline-block">
            Technologies Used:
          </h2>
          <p className="text-gray-300 mb-8">{project.technologies.join(', ')}</p>

          {/* Additional Images or Screenshots */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-200 border-b-2 border-gray-500 pb-2 inline-block">
              Screenshots:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="w-full h-auto rounded-lg shadow-md cursor-pointer transition transform hover:scale-105"
                  onClick={() => openLightbox(image)}
                />
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <img 
                  src={currentImage} 
                  alt="Enlarged screenshot" 
                  className="w-auto max-h-screen rounded-lg shadow-2xl"
                />
                <button
                  onClick={closeLightbox}
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="flex justify-center p-4">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105"
            >
              View Other Projects
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProject;



