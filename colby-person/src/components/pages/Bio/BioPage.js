import React from 'react';
import Navbar from '../Universal/Navbar';
import { FaCode, FaPencilAlt, FaChess, FaMusic, FaGamepad } from 'react-icons/fa'; // Icons for hobbies
import Footer from '../Universal/Footer';

function BioPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-firacode">
      <Navbar />
      <div className="container mx-auto py-12 px-6 md:px-12 pt-24">
        {/* Header Section */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg shadow-lg p-8 flex flex-col items-center mb-12">
          <img
            src="colbygradheadshot.jpg"
            alt="Headshot"
            className="w-44 h-44 md:w-60 md:h-60 rounded-full border-4 border-teal-400 shadow-md mb-6 object-cover transform hover:scale-105 transition duration-300"
          />
          <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
            About Me
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 mt-4"></div>
        </div>

        {/* Description Section */}
        <div className="text-lg text-gray-300 text-center mb-12 px-4 md:px-16 lg:px-32">
          <p className="mb-4">
            Hello! I'm <span className="text-teal-400 font-bold">Colby Person</span>, a passionate <span className="text-blue-400 font-semibold">Software Engineer</span> with a strong dedication to coding and an insatiable curiosity for learning new technologies.
            I find myself daily seeking new ways to create, learn, and develop ideas and projects. I thrive in team environments and aspire to always provide great leadership when called upon.
          </p>
          <p className="italic text-gray-400">
            "There is no challenge without a solution, and no task too big; for my aspirations aim high!"
          </p>
        </div>

        {/* Personal Motto */}
        <div className="flex flex-col items-center bg-gray-800 py-8 px-6 rounded-lg shadow-lg mb-12 hover:bg-gray-700 transition duration-300">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
            Personal Motto
          </h2>
          <p className="text-xl italic text-center mb-2 text-purple-300">
            "Strive to impress and be the best"
          </p>
        </div>

        {/* Skills & Sections */}
        <div className="space-y-16">
          <SkillSection
            title="Languages"
            items={[
              'JavaScript',
              'C++',
              'C#',
              'Java',
              'Python',
              'SQL',
              'HTML & CSS',
              'React',
              'Node.js',
            ]}
            bgGradient="from-green-400 to-green-600"
          />

          <SkillSection
            title="Technologies"
            items={[
              'Visual Studio Code',
              'GitHub',
              'GitKraken',
              'Unity Engine',
              'Jira',
              'Circle CI',
              'Bitbucket',
              'MySQL',
              'Microsoft Office',
            ]}
            bgGradient="from-blue-400 to-blue-600"
          />

          <SkillSection
            title="Soft Skills"
            items={[
              'Active Leader',
              'Communication',
              'Problem Solver',
              'Critical Thinker',
              'Creativity',
              'Responsibility',
            ]}
            bgGradient="from-purple-400 to-purple-600"
          />

          <SkillSection
            title="Hobbies & Interests"
            items={[
              'Playing Piano',
              'Writing & Producing Music',
              'Chess',
              'Playing Video Games',
              'Creating Websites',
              'Developing Games',
            ]}
            bgGradient="from-yellow-400 to-yellow-600"
            iconStyle
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

function SkillSection({ title, items, bgGradient, iconStyle = false }) {
  const icons = {
    'Playing Piano': <FaMusic />,
    'Writing & Producing Music': <FaPencilAlt />,
    'Chess': <FaChess />,
    'Playing Video Games': <FaGamepad />,
    'Creating Websites': <FaCode />,
    'Developing Games': <FaGamepad />,
  };

  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300">
      <h2 className={`text-2xl font-bold text-center mb-6 bg-gradient-to-r ${bgGradient} bg-clip-text text-transparent`}>
        {title}
      </h2>
      <ul className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-gray-700 text-white py-2 px-4 m-2 rounded-lg shadow-md hover:bg-teal-500 hover:text-gray-900 hover:scale-105 transform transition duration-300 flex items-center"
          >
            {iconStyle && icons[item] && (
              <span className="text-xl mr-2">{icons[item]}</span>
            )}
            {item}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 to-gray-600 mt-4"></div>
      
    </div>
  );
}

export default BioPage;

