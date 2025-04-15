import React from 'react';  // Import React to use JSX syntax
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from 'react-router-dom' for routing
import Navbar from './components/Navbar';  // Import the Navbar component (already created) for use across pages
import Home from './pages/Home';  // Import the Home page component
import Features from './pages/Features';  // Import the Features page component
import FAQ from './pages/FAQ';  // Import the FAQ page component
import Benefits from './pages/Benefits';  // Import the new Benefits page component

// Main App component
const App = () => {
  return (
    <Router>  {/* Wrap the entire application in a Router to enable routing */}
      
      {/* Navbar is a shared component that appears on all pages */}
      <Navbar />  

      {/* Define the routes for the application */}
      <Routes>  
        {/* Route for Home page */}
        <Route path="/" element={<Home />} /> 

        {/* Route for Features page */}
        <Route path="/features" element={<Features />} /> 

        {/* Route for FAQ page */}
        <Route path="/faq" element={<FAQ />} /> 

        {/* New route for Benefits page */}
        <Route path="/benefits" element={<Benefits />} />  {/* Benefits page added */}
      </Routes>
    </Router>
  );
};

// Export the App component so it can be used in index.js
export default App;
