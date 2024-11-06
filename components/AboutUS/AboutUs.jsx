import React from 'react';
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="about-heading fade-in">About Us</h1>
        <hr className="about-purple-line fade-in" />
        <p className="about-description fade-in delay">
          Our E-Library is a comprehensive web application designed to enhance your learning experience by providing access to a wealth of course content and video lectures. With a user-friendly interface, you can easily browse PDFs and take your education to the next level.
        </p>
      </div>
    </div>
  );
};

export default About;
