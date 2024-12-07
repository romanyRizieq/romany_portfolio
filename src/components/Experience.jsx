/** 
* @copyright 2024 Romany Rizieq 
* @license Apache-2.0 
*/

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-cover bg-center bg-fixed py-20 px-6 text-center"
      style={{
        backgroundImage:
        `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${import.meta.env.BASE_URL}images/background_black.jpg)`,
        backgroundSize: 'cover',  // Use 'cover' for the global background to fill the section
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
        Experience
      </h2>

      {/* Flex Container for Experience Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Job 1 */}
        <div
          className="bg-cover p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/full-stack.jpg)`, 
            backgroundSize: 'contain',  // Changed to 'contain' to show the image at its original size
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',  // Ensures image doesn't repeat
            borderRadius: '10px', // Rounded corners
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay for better text contrast */}
          <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10 mb-2">
            Computer Engineer | Reserve Officer (Full Stack Web Development)
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 relative z-10">Military Unit | November 2022 – September 2024</p>
          <ul className="list-disc list-inside text-gray-200 space-y-2 relative z-10">
            <li>Developed and maintained web applications to streamline internal processes and enhance operational efficiency.</li>
            <li>Designed and implemented user-friendly interfaces to ensure a positive user experience.</li>
            <li>Technologies used: HTML, JavaScript, PHP, Bootstrap, Tailwind CSS, jQuery, SQL.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div
          className="bg-cover p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/uav.jpg)`, 
            backgroundSize: 'contain',  // Changed to 'contain' to show the image at its original size
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px', // Rounded corners
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay for better text contrast */}
          <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10 mb-2">
            Fixed-Wing UAV Design Engineer
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 relative z-10">UDC for Fixed-Wing UAV, Faculty of Engineering, Aerospace Department | May 2019 – September 2019</p>
          <ul className="list-disc list-inside text-gray-200 space-y-2 relative z-10">
            <li>Designed a fixed-wing UAV using SolidWorks, creating detailed 3D models and integrating propulsion and control systems.</li>
            <li>Conducted aerodynamic simulations using XFLR to optimize lift-to-drag ratios and stability.</li>
            <li>Participated in UAV flight testing and performance evaluations.</li>
          </ul>
        </div>

        {/* Job 3 */}
        <div
          className="bg-cover p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/automotive.jpg)`, 
            backgroundSize: 'contain',  // Changed to 'contain' to show the image at its original size
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px', // Rounded corners
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay for better text contrast */}
          <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10 mb-2">
            Automotive Maintenance (Internship)
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 relative z-10">Nissan Maintenance Centre</p>
          <ul className="list-disc list-inside text-gray-200 space-y-2 relative z-10">
            <li>Gained hands-on experience in automotive repair and maintenance.</li>
            <li>Specialized in diagnosing and repairing propulsion and control systems in vehicles.</li>
          </ul>
        </div>

        {/* Job 4 */}
        <div
          className="bg-cover p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/aero1.jpeg)`, 
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px', // Rounded corners
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay for better text contrast */}
          <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10 mb-2">
            Aerospace Engineer (Internship)
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 relative z-10">EGYPTAIR | August 2021 – October 2021</p>
          <ul className="list-disc list-inside text-gray-200 space-y-2 relative z-10">
            <li>Gained valuable experience in the aerospace industry through a comprehensive training program.</li>
            <li>Developed a strong understanding of aircraft systems and operations.</li>
          </ul>
        </div>

        {/* Job 5 */}
        <div
          className="bg-cover p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/Mechanical.jpg)`, 
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px', // Rounded corners
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay for better text contrast */}
          <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10 mb-2">
            Mechanical Engineer (Internship)
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 relative z-10">Industrial Control for Engineering Industries | September 2020 – November 2020</p>
          <ul className="list-disc list-inside text-gray-200 space-y-2 relative z-10">
            <li>Utilized SOLIDWORKS to design and analyze chassis components, ensuring structural integrity under heavy loads.</li>
            <li>Successfully implemented design principles to optimize performance and functionality.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
