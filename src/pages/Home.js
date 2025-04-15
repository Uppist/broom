import React from 'react';
import './Home.css';  // Import the CSS file for styling
import iphone12 from '../assets/iphone12.png';  // Make sure to import the image

const Home = () => {
  return (
    <div className="Home">
      {/* Left-aligned write-up */}
      <div className="writeup">
        <p>Find vetted and <br /> trusted cleaning <br /> service providers 
        <br /> nearest to you.</p>
      </div>
      {/* {Sub-Text writeup} */}
      <div className='subwriteup'> 
        <p>Our platform instantly connects individuals in need of <br /> 
        cleaning services with trusted, thoroughly vetted <br />
        providers.</p>
      </div>
      {/* NEW: Join Waitlist Button */}
      <div className="home-waitlist-button">
        <button>Join Waitlist</button>
      </div>

      {/* iPhone Image */}
      <img src={iphone12} alt="iPhone 12" className="iphone-image" />

      {/* Features Section */}
      <div id="features" className="Features">
        <div className="features-heading">
          <h1>Discover Our Key Features</h1>
          <p className="demand">On-demand cleaning services</p>
        </div>
      </div>

      {/* === BENEFITS SECTION === */}
      <div id="benefits" className="Benefits">
        <div className="benefits-heading">
          <h1>Why Choose BroomApp</h1>
        </div>
      </div>

      {/* === FAQ SECTION === */}
      <div id="faq" className="FAQ">
        <div className="faq-heading">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>

      {/* Optional: Add other content if needed */}
    </div>
  );
};

export default Home;
