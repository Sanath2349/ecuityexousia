import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    
    <div className="about-us">
      <h1 className='head'>About US</h1>
      
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, Exousia Software Services has been at the forefront of providing innovative software solutions to businesses of all sizes. Our team of experts brings together decades of experience in software development, consulting, and real-time analytics to provide cutting-edge solutions to our clients.
        </p>
      </section>
      
      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
          At Exousia Software Services, our vision is to be the go-to software provider for businesses across industries. We strive to provide innovative solutions that are tailored to meet the diverse needs of our clients.
        </p>
      </section>
      
      <section className="our-technology">
        <h2>Our Technology</h2>
        <p>
          We leverage cutting-edge technology to provide our clients with the best possible solutions. Our team of experts stays up-to-date with the latest trends in software development, consulting and real-time analytics to provide innovative and bespoke solutions.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;