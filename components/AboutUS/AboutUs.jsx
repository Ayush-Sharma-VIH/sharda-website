import React from 'react';
import './AboutUS.css'; // Make sure your CSS file path is correct

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="fade-in">About Us</h1>
        <hr className="purple-line fade-in" />
        <p className="fade-in delay">
          Our E-Library is a comprehensive web application designed to enhance your learning experience by providing access to a wealth of course content and video lectures. With a user-friendly interface, you can easily browse PDFs and take your education to the next level.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
