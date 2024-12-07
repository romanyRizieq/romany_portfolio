/** 
 * @copyright 2024 Romany_Rizieq 
 * @license Apache-2.0 
 */
/**
 * Node modules
 */
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component for routing context
import App from './App'; // Import your main App component
import './index.css'; // Ensure Tailwind CSS is imported

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component wrapped in BrowserRouter for routing context
const root = ReactDOM.createRoot(rootElement); 
root.render(
  <React.StrictMode>
    <Router> {/* Wrap the App component inside Router */}
      <App />
    </Router>
  </React.StrictMode>
);
