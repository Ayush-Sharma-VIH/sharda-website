import React from 'react';
import './Welcome.css'; // Import the CSS file

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <h1>Welcome to the Sharda E-Library</h1>
        <hr className="welcome-line" />
        <p>Unlock a World of Digital Learning Resources</p>
      </div>
      <div className="welcome-image-section">
        <img
          src="https://img.freepik.com/premium-photo/close-up-online-learning-laptop-screen-with-e-learning-icons-desk-workspace_994764-60407.jpg"
          alt="E-Library on Laptop"
        />
      </div>
    </div>
  );
};

export default Welcome;
