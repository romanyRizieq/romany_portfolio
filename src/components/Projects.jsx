/** 
* @copyright 2024 Romany Rizieq 
* @license Apache-2.0 
*/

// eslint-disable-next-line no-unused-vars
import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "Graduation Project: Urban Air Mobility (eVTOL) ",
    description: "•	Designed and developed an electric vertical takeoff and landing (eVTOL) vehicle using SolidWorks, focusing on weight optimization and system integration.<br>•	Engineered an 8-motor propulsion system with battery, ESC, and control connections.<br>•	Configured ArduCopter for optimized flight performance and autonomous operation.",
    imageUrl: `url(${import.meta.env.BASE_URL}./images/uav.png`, // Path to your project image
    projectLink: "https://github.com/romanyRizieq/UAM-eVTOL-.git", // Link to GitHub or live demo
  },
  {
    id: 2,
    title: "Design of Axial Compressor and Turbine",
    description: "Designed an axial compressor using NACA 65 airfoil and a turbine with a desired Mach number, achieving 87% efficiency.",
    imageUrl: `url(${import.meta.env.BASE_URL}/images/turbine.png`, // Path to your project image
    projectLink: "https://www.youtube.com/watch?v=6TIex4nyz7c", // Link to GitHub or live demo
  },
  {
    id: 3,
    title: "Embedded Systems for UAV Control",
    description: "•	Built UAV control systems using ATmega32 microcontrollers:	<br>•	Obstacle Avoidance System: Integrated ultrasonic sensors for navigation safety.<br>•	Stabilization System: Developed temperature-controlled fan mechanisms for UAV cooling.<br>•	Secure UAV Access System: Designed secure access protocols using keypads and LCDs.",
    imageUrl: `url(${import.meta.env.BASE_URL}/images/embedded-system-micro.jpg`, // Path to your project image
    projectLink: "https://github.com/romanyRizieq/Embedded-Projects.git", // Link to GitHub or live demo
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-cover bg-center h-auto bg-fixed py-20 px-6 text-center"
      style={{
        backgroundImage:
        `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${import.meta.env.BASE_URL}images/background_black.jpg)`,
        backgroundSize: 'fill', // Makes the image cover the entire screen
        backgroundPosition: 'center', // Ensures the image is centered
        backgroundAttachment: 'fixed', // Keeps the image fixed while scrolling
      }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">My Projects</h2>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className=" text-black bg-gradient-to-r from-blue-800 to-purple-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-fill"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              {/* Use dangerouslySetInnerHTML to parse the description with <br> */}
              <p
                className="text-lg text-gray-400 mb-4"
                dangerouslySetInnerHTML={{
                  __html: project.description, // Use HTML content with <br> tags
                }}
              />
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-md transform transition-all hover:scale-105 hover:from-blue-600 hover:to-purple-700"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
