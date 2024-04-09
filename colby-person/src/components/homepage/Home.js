import React from 'react';
import '../homepage/Home.css';
import Navbar from '../Navigationbar/Navbar';


function Home() {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
          <img src="Self-Pic.jpg" alt="Profile" className="profile-pic"/>
          <div className="introduction">
              <div className="name">Colby Person</div>
              <div className="profession">Software Engineer</div>
              <div className="ethics">Strong Passion for Coding.</div>
              <div className="ethics">Strong Work Ethic.</div>
          </div>
      </div>

        <div className="glowing-text">
            Check out my Projects, Resume, Education, and Bio to learn more about me and what I have to offer!
        </div>


    </div>
  );
}

export default Home;