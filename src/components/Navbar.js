import { useState } from 'react'; // Import useState hook to manage mobile menu state
import './Navbar.css'; // Import the corresponding CSS file for styling
import logo from '../assets/logo.jpg'; // Import the logo image (make sure the path and extension are correct)

/**
 * Navbar component - Handles the display of the site's navigation
 */
const Navbar = () => {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu's open/closed state
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Inverts the current state
  };

  return (
    <nav className="navbar"> {/* Main navbar container */}
      {/* Logo - Displays the BroomApp logo */}
      <img src={logo} alt="BroomApp Logo" className="navbar-logo" />

      {/* Navigation links - Will be shown as a list on desktop, toggle visibility on mobile */}
      <ul className={isMobileMenuOpen ? "navbar-links active" : "navbar-links"}>
        <li><a href="/">Home</a></li> {/* Home link */}
        <a href="#features" className="nav-link">Features</a> {/* Features link */}
        <a href="#benefits" className="nav-link">Benefits</a>
        <a href="#faq" className="nav-link">FAQ</a>
      </ul>

      {/* Join Waitlist button - Call-to-action button on the navbar */}
      <button className="navbar-btn">Join Waitlist</button>

      {/* Hamburger menu icon for mobile screens - Clicking toggles the mobile menu visibility */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* Each span represents a bar in the hamburger icon */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

// Exporting the Navbar component to be used in other parts of the app
export default Navbar;
