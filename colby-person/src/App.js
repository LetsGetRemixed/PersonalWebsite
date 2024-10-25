
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ScrollToTop from './components/ScrollToTop';

import Education from './components/pages/Education/EducationPage';

import Resume from './components/pages/Resume/ResumePage';
import Bio from './components/pages/Bio/BioPage';

import SingleProject from './components/pages/Projects/SingleProject';
import Projects from './components/pages/Projects/ProjectsPage';



function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/project/:projectId" element={<SingleProject />} />
      </Routes>
      
    </Router>
  );
}

export default App;