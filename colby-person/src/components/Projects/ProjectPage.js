import React from 'react';
import ProjectCard from './Projects';
import Projectsdata from './Projectdata'; // Assume this is an array of project info]
import Navbar from '../Navigationbar/Navbar';
import '../Projects/Projects.css';

const ProjectsPage = () => {
    return (
        <div>
            <Navbar />
        <div className='background'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
                {Projectsdata.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default ProjectsPage;