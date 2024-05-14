import React from 'react';
import '../Education/Education.css';
import Navbar from '../Navigationbar/Navbar';


function Education() {
  return (
      <div>
          <Navbar />
          <div className="education-container">
              <h1 className="education-title">Education</h1>
              <div className="education-content">
                  <div className="education-item">
                      <div className="education-header">
                          <img src="/images/education/texasstatelogo.png" alt="University" className="education-photo"/>
                          <div>
                              <h2 className="institution-name">Texas State University</h2>
                              <p className="degree">Bachelor of Science in Computer Science</p>
                              <p className= "minor">Minor in Applied Mathematics</p>
                              <p className="dates">August 2020 - Spring 2024</p>
                              <p className="gpa">GPA: 3.15/4.0</p>
                          </div>
                      </div>
                      <p className="description">I graduated from Texas State in May 2024 with a bachelor's degree in Computer Science and a minor in Applied Mathematics. During my studies, I honed my skills in software engineering principles, object-oriented design programming, and advanced algorithm design and analysis.</p>
                      <h3 className="subsection-title">Advanced Computer Science Courses Taken</h3>
                      <ul className="course-list">
                          <li>Computer Vision</li>
                          <li>Algorithm Design and Analysis </li>
                          <li>Data Mining </li>
                          <li>Human Factors Project </li>
                          <li>Software Engineering Project </li>
                      </ul>
                      <h3 className="subsection-title">Advanced Applied Mathematics Courses Taken</h3>
                      <ul className="course-list">
                          <li>Differential Equations</li>
                          <li>Deterministic Operations & Research</li>
                          <li>Calculus II</li>
                          <li>Discrete Math II</li>
                          
                      </ul>
                      <h3 className="subsection-title">Extra-Curricular Activities</h3>
                      <ul className="activity-list">
                          <li>Varsity Rocket Leauge Esports Team</li>
                          
                      </ul>
                  </div>
                  <div className="education-item">
                      <div className="education-header">
                          <img src="/images/education/marblefallslogo.jpg" alt="High School" className="education-photo"/>
                          <div>
                              <h2 className="minstitution-name">Marble Falls High School</h2>
                              <p className="degree">High School Diploma</p>
                              <p className="dates">August 2016 - May 2020</p>
                              <p className="gpa">GPA Weighted: 5.842/6.0</p>
                              <p className="gpa">GPA Unweighted: 3.482/4.00</p>
                          </div>
                      </div>
                      <p className="description">My career as a software engineer officially started in highschool, where I begun my journey taking an AP Computer Science course, finding my true love and passion for coding, as well as giving me a headstart in college.</p>
                      <h3 className="subsection-title">Extra-Curricular Activities</h3>
                      <ul className="activity-list">
                          <li>Varsity Football</li>
                          <li>Track Team</li>
                          <li>Honors Society</li>
                          <li>School Intern for IT-Practicum</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Education;