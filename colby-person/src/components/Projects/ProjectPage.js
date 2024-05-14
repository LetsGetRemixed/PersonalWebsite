import React from 'react';
import ProjectCard from './Projects';
import Projectsdata from './Projectdata'; // Assume this is an array of project info]
import Navbar from '../Navigationbar/Navbar';
import '../Projects/Projects.css';

const ProjectsPage = () => {
    const completedProjects = Projectsdata.filter(project => project.id < 30);
    const inProgressProjects = Projectsdata.filter(project => project.id >= 30);

    return (
        <div>
            <Navbar />
        <div className='background'>
        
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                 <h1 className='comphead'>Completed Projects</h1>
                {completedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <h1 className='uncomphead'>In Progress Projects</h1>
                    {inProgressProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
            </div>
        </div>
        </div>
    );
};

export default ProjectsPage;