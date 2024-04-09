
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Bio from './components/Bio/Bio';
import Education from './components/Education/Education';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </Router>
  );
}

export default App;