/**
 * @copyright 2024 Romany Rizieq 
 * @license Apache-2.0 
 */

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the last visited route from localStorage or sessionStorage
    const lastVisitedRoute = localStorage.getItem('lastVisitedRoute');

    // If there is a last visited route, navigate to it
    if (lastVisitedRoute) {
      navigate(lastVisitedRoute);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

// Use the `useEffect` hook to update the last visited route in localStorage
const RoutesWithHistory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for route changes and store the current route in localStorage
    const unlisten = navigate((location) => {
      localStorage.setItem('lastVisitedRoute', location.pathname);
    });

    return () => unlisten();
  }, [navigate]);

  return <App />;
};

export default RoutesWithHistory;
