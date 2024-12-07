/**
 * @copyright 2024
 * @license Apache-2.0
 */
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-fixed text-white flex items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./images/background_black.jpg)', // Updated path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 sm:px-10 space-y-10 lg:space-y-0 lg:space-x-16 pt-24 sm:pt-32">
        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="./images/Romany Rizieq (Home).jpeg" // Updated path
            alt="Romany Rizieq"
            className="w-3/4 max-w-xs sm:max-w-sm lg:w-80 h-auto rounded-3xl border-4 border-black shadow-2xl transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Welcome Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to My World
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Hello, I’m{" "}
            <span className="text-blue-400 font-semibold">Romany Rizieq</span> —
            an Aerospace Engineer, Frontend Developer, and Automotive Specialist.
            I combine precision engineering and web creativity to build seamless
            and innovative experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="./Romany_Rizieq_Resume.pdf" // Keep this in public folder for consistent linking
              download
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transform transition-all hover:scale-105 hover:from-blue-600 hover:to-purple-700 text-sm sm:text-base"
            >
              Download Resume
            </a>
            <a
              href="#about"
              className="border-2 border-blue-400 text-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-blue-400 hover:text-white text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Home;
