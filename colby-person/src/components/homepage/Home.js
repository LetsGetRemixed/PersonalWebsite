import React from 'react';
import '../homepage/Home.css';
import Navbar from '../Navigationbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
          <div className='intro-container'>
            <img src="Self-Pic.jpg" alt="Profile" className="profile-pic"/>
            <div className="introduction">
               <div className="name">Colby Person</div>
               <div className="profession">Software Engineer</div>
               <div className="ethics">Strong Passion for Coding.</div>
               <div className="ethics">Strong Work Ethic.</div>
            </div>

            <div className="contact-info">
                        <div className="contact-item">
                            <a href="https://github.com/LetsGetRemixed" className="icon-button">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://github.com/LetsGetRemixed" className="contact-link" target="_blank" rel="noopener noreferrer">
                                https://github.com/LetsGetRemixed
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="tel:512-786-5133" className="icon-button">
                                <i className="bi bi-telephone-fill"></i>
                            </a>
                            <span className="contact-text">512-786-5133</span>
                        </div>
                        <div className="contact-item">
                            <a href="mailto:colbyperson14@gmail.com" className="icon-button">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                            <span className="contact-text">colbyperson14@gmail.com</span>
                        </div> 



            </div>



          </div>

          <div className="glowing-text">
            Check out my Projects, Resume, Education, and Bio to learn more about me and what I have to offer!
        </div>

          

      </div>

        


    </div>
  );
}

export default Home;