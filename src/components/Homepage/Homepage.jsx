import React from "react";
import "./Homepage.css";
import heroimg from "../../assests/shubham-dhage-v0VjjYYFjOg-unsplash.jpg";
import visionimg from "../../assests/possessed-photography-JjGXjESMxOY-unsplash.jpg";
import product1img from "../../assests/resource-allocation.png";
import product2img from "../../assests/tracking.png";
import product3img from "../../assests/stakeholder.png";
import { motion } from "framer-motion";
import service1img from "../../assests/layer.png";
import Contactus from "../common/Contactus/Contactus";

const Homepage = () => {
  return (
    <div className="homeContainer">
      <div className="herosection">
        <div className="homeHeroHeading">
          <motion.h1 transition={{ duration: 0.5 }} whileHover={{ scale: 1.1 }}>
            Ecuity Exousia Software Services
          </motion.h1>
        </div>
        <motion.div
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="homeheroDescription"
        >
          Exousia Software Services is a dynamic and innovative software company
          dedicated to delivering cutting-edge solutions tailored to meet the
          diverse needs of businesses across industries. Our team of experts
          leverages their extensive experience to provide fast and
          reliable real-time data solutions that offer a competitive edge to our
          clients.
        </motion.div>
        <div className="heroimg">
          <img src={heroimg} alt="herobg" />
        </div>
      </div>
      <div className="linesection">
        <div className="line"></div>
      </div>

      <div className="visionContainer">
        <div className="visionHeading">
          <p>VISION</p>
        </div>

        <div className="visionDescription">
          <p> We’re Here to Revolutionize the World of tech</p>
        </div>
        <div className="visionContent">
          <p>
            At Ecuity Exousia Software Services, our vision is to be the go-to
            software provider for businesses across industries. We strive to
            provide innovative solutions that are tailored to meet the diverse
            needs of our clients.
          </p>
          <motion.img
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            src={visionimg}
            alt="visionimg"
          />
        </div>
      </div>
      <div className="productcontainer">
        <div className="linesectionproduct">
          <div className="lineproduct"></div>
        </div>
        <div className="productheading">
          <p>Our Products</p>
        </div>
        <div className="productslist">
          <div className="productcontent">
            <img src={product1img} alt="producticon" className="productimg" />
            <h3 className="productname">Human Resource Management (HRMS)</h3>
            <p className="productdescription">
              An HRMS (Human Resource Management System) is a type of HR
              software that enables the management of several HR functions
              through the use of information technology. An HRMS aims to improve
              the productivity and efficiency of the business through the
              automation of manual and repetitive tasks.
            </p>
          </div>
          <div className="productcontent">
            <img src={product2img} alt="producticon" className="productimg" />
            <h3 className="productname">Key Performance Indicator(KPI)</h3>
            <p className="productdescription">
              Key performance indicators (KPIs) refer to a set of quantifiable
              measurements used to gauge a company’s overall long-term
              performance. KPIs specifically help determine a company's
              strategic, financial, and operational achievements, especially
              compared to those of other businesses within the same sector.
            </p>
          </div>
          <div className="productcontent">
            <img src={product3img} alt="producticon" className="productimg" />
            <motion.h3
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className="productname"
            >
              Lead Management
            </motion.h3>
            <motion.p
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="productdescription"
            >
              Lead management is the process of capturing leads, tracking their
              activities and behaviour, qualifying them, giving them constant
              attention to make them sales-ready, and then passing them on to
              the sales team.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="servicescontainer">
        <div className="linesectionproduct">
          <div className="lineproduct"></div>
        </div>
        <div className="servicesheading">
          <p>Our Services</p>
        </div>
        <div className="serviceslist">
          <div className="services">
            <img src={service1img} alt="servicesimg" className="servicesimg" />
            <div className="servicecontent">
              <h3 className="servicesname">UI/UX DESIGN</h3>
              <p className="servicesdescription">
                UI/UX design, which stands for User Interface/User Experience
                design, is a critical aspect of creating digital products,
                including websites, mobile apps, and software applications.
                UI/UX design focuses on enhancing the usability, accessibility,
                and overall satisfaction users experience when interacting with
                a product.
              </p>
            </div>
          </div>
          <div className="services">
            <img src={service1img} alt="servicesimg" className="servicesimg" />
            <div className="servicecontent">
              <h3 className="servicesname">SOFTWARE DEVELOPMENT</h3>
              <p className="servicesdescription">
                We focus on understanding business requirements and effective
                application development for all sizes and complexities of
                businesses and organizations. Our constant endeavor is to use
                latest technologies and following industry best practices for
                building robust applications for our clients.
              </p>
            </div>
          </div>
          <div className="services">
            <img src={service1img} alt="servicesimg" className="servicesimg" />
            <div className="servicecontent">
              <h3 className="servicesname">INTERNET OF THINGS</h3>
              <p className="servicesdescription">
                The Internet of Things (IoT) is the inter-networking of physical
                devices, vehicles (also referred to as "connected devices" and
                "smart devices"), buildings, and other items embedded with
                electronics, software, sensors, actuators, and network
                connectivity which enable these objects to collect and exchange
                data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contactus/>
    </div>
  );
};

export default Homepage;
