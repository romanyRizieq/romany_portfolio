/** 
* @copyright 2024 Romany Rizieq 
* @license Apache-2.0 
*/

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-black   text-white py-4">
      {/* Footer Container */}
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-3">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/romany0farouk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-600 text-xl transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/romany-rizieq-2562651b3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-600 text-xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/romany_farouk_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-600 text-xl transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/romanyRizieq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-600 text-xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-200 text-xs">
          &copy; 2024 Romany Rizieq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
