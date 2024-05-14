import React from 'react';
import '../Bio/Bio.css';
import Navbar from '../Navigationbar/Navbar';


function Bio() {
  return (
      <div>
          <Navbar />
          <div className="bio-container">
              <div className="bio-header">
                  <img src="colbygradheadshot.jpg" alt="Headshot" className="bio-photo" />
                  <h1 className="bio-title">About Me</h1>
              </div>
              <p className="bio-description">
                  Hello! I'm Colby Person, a passionate Software Engineer with a strong dedication for
                   coding and an insatiable curiosity for learning new technologies.
                  I find myself daily seeking more ways to create, learn, and develop new ideas and projects.
                  I thrive in team enviroments and aspire to always take great leadership when I
                  am called upon for it.
              </p>
              <p className="bio-description">
              There is no challenge without a solution, and no task too big; for my aspirations
                  climb too high!
              </p>
              <h2 className="section-title">Personal Motto: </h2>
              <p className="motto">"Strive to impress and be the best"</p>
              <h2 className="section-title">Languages</h2>
              <ul className="languages-list">
                  <li>JavaScript</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>HTML & CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
              </ul>

              <h2 className="section-title">Technologies</h2>
              <ul className="technologies-list">
                  <li>Visiual Studio Code</li>
                  <li>Github</li>
                  <li>GitKraken</li>
                  <li>Unity Engine</li>
                  <li>Jira</li>
                  <li>Circle CI</li>
                  <li>Bitbucket</li>
                  <li>MySQL</li>
                  <li>Microsoft Office</li>
              </ul>

              <h2 className="section-title">Soft Skills</h2>
              <ul className="softskills-list">
                  <li>Active Leader</li>
                  <li>Communication</li>
                  <li>Problem Solver</li>
                  <li>Critical Thinker</li>
                  <li>Creativity</li>
                  <li>Resposible</li>
                
              </ul>


              <h2 className="section-title">Hobbies & Interests</h2>
              <ul className="hobbies-list">
                  <li>Playing Piano</li>
                  <li>Writing Music</li>
                  <li>Chess</li>
                  <li>Playing Video Games</li>
                  <li>Creating Websites</li>
                  <li>Developing Games</li>
              </ul>
          </div>
      </div>
  );
}

export default Bio;