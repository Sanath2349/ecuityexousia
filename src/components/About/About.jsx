import React from "react";
import "./About.css";
import aboutusimg from "../../assests/christina-wocintechchat-com-34GZCgaVksk-unsplash.jpg";
import ourstory from "../../assests/ourstory.png";
import ourvision from "../../assests/ourvision.png";
import ourtech from "../../assests/ourtech.png";
// new
const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="head">ABOUT US</h1>

      
      <div className="herosection">
        <img src={aboutusimg} alt="" />
        <div className="point">
          <p>Improving Everyday life With Software Services </p>
         
        </div>
      </div>
      
      <section className="our-story">
        <div className="line"></div>

        <h2>Our Story</h2>

        <h1 className="storyline">
          "Empowering the Future: Our Journey of Innovation and Excellence"
        </h1>
        <div className="story">
          <img src={ourstory} alt="" />

          <p>
            Founded in 2024, Ecuity Exousia Software Services has been at the
            forefront of providing innovative software solutions to businesses
            of all sizes. Our team of experts brings together decades of
            experience in software development, consulting, and real-time
            analytics to provide cutting-edge solutions to our clients.
          </p>
        </div>
      </section>

      <section className="our-vision">
        <div className="line"></div>
        <h2>Our Vision</h2>
        <h1 className="storyline">
          "Shaping Tomorrow: Our Vision for a Brighter, Connected Future"
        </h1>
        <div className="vision">
          <img src={ourvision} alt="" />
          <p>
            At Ecuity Exousia Software Services, our vision is to be the go-to
            software provider for businesses across industries. We strive to
            provide innovative solutions that are tailored to meet the diverse
            needs of our clients.
          </p>
        </div>
      </section>

      <section className="our-technology">
        <div className="line"></div>
        <h2>Our Technology</h2>
        <h1 className="storyline">
          "Cutting-Edge Solutions: The Technology Powering Our Success"
        </h1>
        <div className="story">
          <img src={ourtech} alt="" />
          <p>
            We leverage cutting-edge technology to provide our clients with the
            best possible solutions. Our team of experts stays up-to-date with
            the latest trends in software development, consulting and real-time
            analytics to provide innovative and bespoke solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
