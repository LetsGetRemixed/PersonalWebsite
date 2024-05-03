import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
        <div className="project-image-container">
            <Slider {...settings}>
                {project.images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Project image ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
        <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Class: {project.class}</p>
            <p>Group Members: {project.members}</p>
            <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
            <a href={project.websiteurl} className="website-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
    </div>
);
};

export default ProjectCard;