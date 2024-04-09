import React from 'react';
import '../homepage/Home.css';
import Navbar from '../Navigationbar/Navbar';


function Home() {
    return (
      <div>


         <Navbar />
             <div className="welcome-container">
                  Welcome
             </div>

      </div>
    );
  }
  
  export default Home;