/** 
 * @copyright 2024 Romany Rizieq 
 * @license Apache-2.0 
 */

// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-cover bg-center min-h-screen bg-fixed py-20 px-6 flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url(./images/background_black.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 pt-10">
        About Me
      </h2>

      {/* About Content - Responsive Flexbox */}
      <div className="flex flex-col lg:flex-row  items-center justify-between max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:space-x-12 pt-10">
        {/* About Description */}
        <div className="text-left space-y-6 w-full lg:w-1/2">
          <p className="text-xl text-gray-300 leading-relaxed">
            Welcome! I’m <span className="text-purple-500 font-bold">Romany Rizieq</span>, a dynamic fusion of Aerospace engineering expertise and web development creativity. At 25, I’ve cultivated a diverse skill set spanning fixed-wing UAV design, eVTOL systems, and cutting-edge technologies in flight control and embedded systems.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            My journey began in the skies with hands-on experience in propulsion and drone systems. Certified in Embedded Systems and trained at Nissan maintenance centers, I bring a meticulous, solution-driven approach to every challenge—whether it’s in the workshop or behind a computer screen.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            As a passionate web developer, I specialize in creating visually stunning, user-centric websites using React and Node.js. My goal is to transform ideas into seamless digital experiences, leveraging the latest technologies to craft modern and responsive designs.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Beyond engineering and coding, I am driven by a love for innovation, learning, and collaboration. Let’s connect and bring visionary projects to life together!
          </p>
        </div>

        {/* Photo of Romany Rizieq */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./images/romany-rizieq.jpg" // Ensure the path is correct
          alt="Romany Rizieq"
          className="w-3/4 h-auto lg:w-96 lg:h-100 object-cover rounded-lg border-4 border-black shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6"
        />
      </div>
      </div>
    </section>
  );
};

export default About;
