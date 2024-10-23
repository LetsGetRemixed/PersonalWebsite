
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ScrollToTop from './components/ScrollToTop';

import Education from './components/Education/Education';

import Resume from './components/Resume/Resume';
import Bio from './components/Bio/Bio';



function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
      
    </Router>
  );
}

export default App;