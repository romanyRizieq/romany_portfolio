/**
 * @copyright 2024 Romany Rizieq
 * @license Apache-2.0
 */

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"; // React core hooks
import { NavLink } from "react-router-dom"; // NavLink for active link highlighting
import {
  FaHome,
  FaUser,
  FaInfo,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa"; // FontAwesome icons for navigation

const Header = () => {
  // State to track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu's visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the mobile menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Container for logo and navigation */}

      <div className="container mx-auto flex justify-between items-center py-3 px-2">

        {/* Logo and name on the left */}
        <div className="flex items-center justify-start space-x-2">
          <a
            href="/home"
            className="flex items-center space-x-2 p-2 rounded-full hover:bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 transition-all transform hover:scale-110 cursor-pointer"
          >
            {/* Logo image */}
            <img
              src="./R.svg"
              alt="Romany Rizieq Logo"
              className="h-10 w-10 rounded-full"
            />
            {/* Brand name */}
            <span className="text-xl font-bold text-gray-200 hover:bg-gradient-to-r from-blue-500 to-purple-600">
              Romany Rizieq
            </span>
          </a>
        </div>

        {/* Calling Icon */}


        {/* Hamburger menu button for mobile view */}
        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <nav
          className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 items-center absolute md:static top-16 md:top-auto right-0 bg-gray-800 md:bg-transparent w-full md:w-auto md:p-0 p-3`}
        >
          <NavLink
            to="/home"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `text-sm px-3 py-1 rounded-full flex items-center cursor-pointer transition-all ${isActive
                ? "bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600"
                : "text-gray-200 hover:bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-600"
              }`
            }
          >
            <FaHome className="mr-2" />
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `text-sm px-3 py-1 rounded-full flex items-center cursor-pointer transition-all ${isActive
                ? "bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600"
                : "text-gray-200 hover:bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-600"
              }`
            }
          >
            <FaInfo className="mr-2" />
            About
          </NavLink>

          <NavLink
            to="/experience"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `text-sm px-3 py-1 rounded-full flex items-center cursor-pointer transition-all ${isActive
                ? "bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600"
                : "text-gray-200 hover:bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-600"
              }`
            }
          >
            <FaUser className="mr-2" />
            Experience
          </NavLink>

          <NavLink
            to="/projects"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `text-sm px-3 py-1 rounded-full flex items-center cursor-pointer transition-all ${isActive
                ? "bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600"
                : "text-gray-200 hover:bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-600"
              }`
            }
          >
            <FaProjectDiagram className="mr-2" />
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `text-sm px-3 py-1 rounded-full flex items-center cursor-pointer transition-all ${isActive
                ? "bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600"
                : "text-gray-200 hover:bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-600"
              }`
            }
          >
            <FaEnvelope className="mr-2" />
            Contact
          </NavLink>
          <a
          href="tel:+201200225397"
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-3 py-2 rounded-full text-white text-sm font-semibold shadow-md transition-all transform hover:scale-105"
        >
          <FaPhoneAlt className="text-emerald-50" />
        </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
