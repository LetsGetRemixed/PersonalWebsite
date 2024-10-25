import React from 'react';
import Navbar from '../Universal/Navbar';
import { FaCheckCircle } from 'react-icons/fa'; // Icon for list items
import Footer from '../Universal/Footer';

function EducationPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-firacode pt-24">
      <Navbar />
      <div className="container mx-auto py-12 px-6 md:px-12">
        <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Education
        </h1>
        

        <div className="space-y-16">
          {/* Texas State University */}
          <div className="bg-gradient-to-r from-white via-gray-100 to-gray-50 bg-opacity-90 rounded-lg shadow-xl p-6 md:p-10 text-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <img
                src="./images/education/texasstatelogo.png"
                alt="Texas State University"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full mb-4 md:mb-0 md:mr-8 border-4 border-gray-300"
              />
              <div>
                <h2 className="text-3xl font-bold text-[#572830]">Texas State University</h2>
                <p className="text-lg text-gray-700 font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-md text-gray-600 font-medium">Minor in Applied Mathematics</p>
                <p className="text-md text-[#8B734B] font-semibold">August 2020 - Spring 2024</p>
                <p className="text-md text-[#8B734B] font-semibold">GPA: 3.15/4.0</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              Graduated with a degree in Computer Science and a minor in Applied Mathematics, specializing in software engineering principles, object-oriented programming, and advanced algorithms.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-500 pb-2">Advanced Computer Science Courses</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-teal-500 mr-2" /> Computer Vision
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-teal-500 mr-2" /> Algorithm Design and Analysis
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-teal-500 mr-2" /> Data Mining
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-teal-500 mr-2" /> Human Factors Project
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-teal-500 mr-2" /> Software Engineering Project
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-600 pb-2">Advanced Applied Mathematics Courses</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" /> Differential Equations
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" /> Deterministic Operations & Research
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" /> Calculus II
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-purple-600 mr-2" /> Discrete Math II
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-400 pb-2">Extra-Curricular Activities</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-gray-600 mr-2" /> Varsity Rocket League Esports Team
              </li>
            </ul>
          </div>

          {/* Marble Falls High School */}
          <div className="bg-gradient-to-l from-white via-gray-100 to-gray-50 bg-opacity-90 rounded-lg shadow-xl p-6 md:p-10 text-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <img
                src="/images/education/marblefallslogo.jpg"
                alt="Marble Falls High School"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full mb-4 md:mb-0 md:mr-8 border-4 border-gray-300"
              />
              <div>
                <h2 className="text-3xl font-bold text-[#5f157b]">Marble Falls High School</h2>
                <p className="text-lg text-gray-700 font-medium">High School Diploma</p>
                <p className="text-md text-[#8B734B] font-semibold">August 2016 - May 2020</p>
                <p className="text-md text-[#8B734B] font-semibold">GPA Weighted: 5.842/6.0</p>
                <p className="text-md text-[#8B734B] font-semibold">GPA Unweighted: 3.482/4.00</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              My career as a software engineer began in high school, where an AP Computer Science course ignited my passion for coding.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-400 pb-2">Extra-Curricular Activities</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-gray-600 mr-2" /> Varsity Football
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-gray-600 mr-2" /> Track Team
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-gray-600 mr-2" /> Honors Society
              </li>
              <li className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-sm flex items-center">
                <FaCheckCircle className="text-gray-600 mr-2" /> School Intern for IT-Practicum
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EducationPage;


