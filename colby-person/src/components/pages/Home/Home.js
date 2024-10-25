import React from 'react';
import Navbar from '../Universal/Navbar';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Footer from '../Universal/Footer';
const Home = () => {
  return (
    <div className="font-firacode">
      <Navbar />
      <div> 
            <Header />
            <Projects />
            <Resume />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
