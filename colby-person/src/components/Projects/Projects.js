import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    
};

const adjustContainerForImage = (img) => {
  const container = img.parentElement; // Assuming the direct parent is the container
  if (img.naturalHeight > img.naturalWidth) {
    // It's a vertical image
    container.style.maxWidth = '300px'; // Smaller width for vertical images
    container.style.height = '150%';
    container.style.maxHeight = '600px'; // Larger height for vertical images
  } else {
    // It's a horizontal image
    container.style.maxWidth = '600px';
    container.style.height = '100%';
    container.style.maxHeight = '400px';
  }
};

const ProjectCard = ({ project }) => {
    useEffect(() => {
        window.addEventListener("load", () => {
          // Trigger a resize or reinitialization if necessary
          window.dispatchEvent(new Event("resize"));
        });
      }, []);
  return (
    <div className="project-card">
        <div className="project-image-container">
            <Slider {...settings}>
            {project.images.map((img, index) => (
    <div key={index}>
        <img src={img} alt={`Project image ${index}`} onLoad={(e) => adjustContainerForImage(e.target)} />
    </div>
))}

            </Slider>
        </div>
        <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Project Type: {project.type}</p>
            <p>Context:  {project.class}</p>
            <p>Total Developers: {project.members}</p>
            <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
            {project.websiteurl && (
        <a href={project.websiteurl} className="website-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
    )}
        </div>
    </div>
);
};

export default ProjectCard;