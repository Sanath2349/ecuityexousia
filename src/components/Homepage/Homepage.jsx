import React from "react";
import "./Homepage.css";
import heroimg from "../../assests/shubham-dhage-v0VjjYYFjOg-unsplash.jpg";

const Homepage = () => {
  return (
    <div className="homeContainer">
      <div className="herosection">
        <div className="homeHeroHeading">
          <h1>Ecuity Exousia Software Services</h1>
        </div>
        <div className="homeheroDescription">
          Exousia Software Services is a dynamic and innovative software company
          dedicated to delivering cutting-edge solutions tailored to meet the
          diverse needs of businesses across industries. Our team of experts
          leverages their extensive experience to provide fast and
          reliable real-time data solutions that offer a competitive edge to our
          clients.
        </div>
        <div className="heroimg">
          <img src={heroimg} alt="herobg" />
        </div>
      </div>
      <div className="linesection">
        <div className="line"></div>
      </div>

      <div className="visionContainer">
        <div className="visionHeading">
          <h3>VISION</h3>
        </div>

        <div className="visionDescription">
          <h1> We’re Here to Revolutionize the World of tech</h1>
        </div>
        <div className="visionContent">
          <p>
            At Ecuity Exousia Software Services, our vision is to be the go-to
            software provider for businesses across industries. We strive to
            provide innovative solutions that are tailored to meet the diverse
            needs of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
