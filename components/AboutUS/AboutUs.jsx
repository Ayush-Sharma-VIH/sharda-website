import React from 'react';
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <h1 className="about-heading fade-in">About Us</h1>
        <hr className="about-purple-line fade-in" />
        <p className="about-description fade-in delay">
          Our website is dedicated to empowering underprivileged students by providing access to high-quality educational resources, free of cost. We believe that education is a fundamental right and should be accessible to everyone, regardless of their socioeconomic background.  
        </p> <br />
        <p className="about-description fade-in delay">
          Through our platform, students can explore a wide range of materials, including e-books, video lectures, and practice exercises, all carefully curated to help them excel academically. Our user-friendly interface ensures a seamless learning experience, making it easy for students to find the resources they need.  
        </p><br />
        <p className="about-description fade-in delay">
          At the heart of our mission is the desire to bridge the education gap and create a world where every student has the opportunity to unlock their full potential. Join us in this journey to make education a tool for equality and change. Together, we can inspire and uplift the next generation of learners.  
        </p>
      </div>
    </div>
  );
};

export default About;
