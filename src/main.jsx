/** 
 * @copyright 2024 Romany_Rizieq 
 * @license Apache-2.0 
 */
/**
 * Node modules
 */
// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from "react-router-dom";
import App from './App'; // Import your main App component
import './index.css'; // Ensure Tailwind CSS is imported

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement); 
root.render(
  <React.StrictMode>
  <BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
  </BrowserRouter>
    
  </React.StrictMode>
);

