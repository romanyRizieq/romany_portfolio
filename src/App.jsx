/** 
* @copyright 2024 Romany Rizieq 
* @license Apache-2.0 
*/

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Section */}
        <div>
        <Header />

        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
          <Route
          path=""
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
            {/* Home Route - Display all sections together */}
            <Route
              path="/home"
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
            
            {/* Other Routes - Display specific page */}
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;