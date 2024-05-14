import React from 'react';
import '../Resume/Resume.css';
import Navbar from '../Navigationbar/Navbar';


function Resume() {
  return (
      <div>
          <Navbar />
          <div className="main-content">
              <div className="resume-header">
                  <h1>My Professional Resume</h1>
                  <p>Below is my resume detailing my skills, experience, and education. You can also <a href="Resumeforwebsite.pdf" download="My_Resume.pdf">download the PDF</a> to view it offline.</p>
                  <p>All the information in my resume can also be found on this portfolio website.</p>
              </div>
              <div className="resume-container">
                  <object data="Resumeforwebsite.pdf" type="application/pdf" width="100%" height="100%">
                      <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="Resumeforwebsite.pdf">Download PDF</a>.</p>
                  </object>
              </div>
          </div>
      </div>
  );
}

export default Resume;