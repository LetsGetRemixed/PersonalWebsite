import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import projectData from '../Projects/Projectdata';

function Projects() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState(
    projectData.map(() => 'before')
  );
  const [centerIndex, setCenterIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show center and side previews
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    beforeChange: (current, next) => {
      setCenterIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024, // Tablet and up
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 1, // Show one slide at a time on smaller screens
          centerMode: true,
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        }
      }
    ]
  };

  const toggleImage = (index) => {
    if (index === centerIndex) {
      setCurrentView((prevView) =>
        prevView.map((view, i) =>
          i === index ? (view === 'before' ? 'after' : 'before') : view
        )
      );
    }
  };

  const CustomPrevArrow = () => (
    <button 
      className="absolute left-2 md:left-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition rounded-full p-3 z-20"
      onClick={() => sliderRef.current.slickPrev()}
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      &#10094;
    </button>
  );

  const CustomNextArrow = () => (
    <button 
      className="absolute right-2 md:right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition rounded-full p-3 z-20"
      onClick={() => sliderRef.current.slickNext()}
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      &#10095;
    </button>
  );

  const handleProjectClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="bg-gray-900 py-10 relative overflow-hidden border-b-2">
      <h2 className="text-4xl text-white text-center mb-12 font-bold">My Projects</h2>

      <div className="container mx-auto px-4">
        <Slider ref={sliderRef} {...settings}>
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item cursor-pointer transform transition duration-700 ${
                index === centerIndex 
                  ? 'scale-110 z-10 font-extrabold text-white'
                  : 'scale-90 opacity-75'
              }`}
              onClick={() => handleProjectClick(index)}
            >
              <div 
                className={`relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-5 ${
                  index === centerIndex ? 'border-4 border-teal-500' : ''
                }`}
                onClick={() => toggleImage(index)}
              >
                {currentView[index] === 'before' ? (
                  <img 
                    src={project.showcaseImage1} 
                    alt={`${project.title} - Before`} 
                    className="w-full h-80 object-cover rounded-md"
                  />
                ) : (
                  <img 
                    src={project.showcaseImage2} 
                    alt={`${project.title} - After`} 
                    className="w-full h-80 object-cover rounded-md"
                  />
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  <h3 
                    className="text-2xl font-bold text-white cursor-pointer hover:text-teal-400 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <CustomPrevArrow />
        <CustomNextArrow />

        {/* "View Project" Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition"
            onClick={() => navigate(`/project/${projectData[centerIndex].id}`)}
          >
            View Selected Project
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;







