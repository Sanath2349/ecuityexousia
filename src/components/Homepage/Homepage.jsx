import React, { useRef } from "react";
import "./Homepage.css";
import heroimg from "../../assests/shubham-dhage-v0VjjYYFjOg-unsplash.jpg";
import visionimg from "../../assests/possessed-photography-JjGXjESMxOY-unsplash.jpg";
import product1img from "../../assests/resource-allocation.png";
import product2img from "../../assests/tracking.png";
import product3img from "../../assests/stakeholder.png";
import { motion } from "framer-motion";
import service1img from "../../assests/ui.png";
import service2img from "../../assests/app-development.png";
import service3img from "../../assests/software-developer.png";
import Contactus from "../common/Contactus/Contactus";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Slider from "../Slider";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const scrollRef = useRef();
  const productRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    gsap.from(".homeHeroHeading h1", {
      // y:80,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      scale: 0.7,
      scrollTrigger: {
        trigger: ".homeHeroHeading",
        scroll: "body",
      },
    });
    gsap.from(".homeheroDescription", {
      y: 80,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".homeheroDescription",
        scroll: "body",
      },
      // scale:0.7
    });
    gsap.from(".linesection", {
      width: 0,
      duration: 1,
      delay: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".linesection",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        scroll: "body",
        // markers:true
      },
      // scale:0.7
    });

    gsap.from(".visionDescription", {
      rotationX: 180,
      opacity: 0,
      x: -50,
      y: 50,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".visionDescription",
        scroller: "body",
        start: "top 70%",
        // markers:true
      },
    });

    gsap.from(".visionimg", {
      rotationY: 180,
      opacity: 0,
      x: -150,
      y: 50,
      duration: 2,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".visionimg",
        scroller: "body",
        start: "top 70%",
        // markers:true
      },
    });

    boxes.forEach((box) => {
      gsap.from(box, {
        // x: -50 * (boxes.indexOf(box) + 5),
        y: 50 * (boxes.indexOf(box) + 5),
        rotation: 360,
        scale: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "top-=280 bottom",
          end: "top 70%",
          // scrub: true,
        },
        ease: "power1.inOut",
      });
    });

    const boxes1 = gsap.utils.toArray(productRef.current.children);
    boxes1.forEach((box) => {
      gsap.from(box, {
        // x: -150 * (boxes.indexOf(box) + 5),
        y: 50 * (boxes1.indexOf(box) + 4),
        // rotation:90,
        scale: 0.7,
        opacity: 0,
        stagger: 1,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "top-=220 bottom",
          end: "top 60%",
          // scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  });
  return (
    <div className="homeContainer">
      <Slider />
      <div className="herosection">
        <div className="homeHeroHeading">
          <h1>Ecuity Exousia Software Services</h1>
        </div>
        <div className="homeheroDescription">
          Exousia Software Services is a dynamic and innovative software company
          dedicated to delivering cutting-edge solutions tailored to meet the
          diverse needs of businesses across industries. Our team of experts
          leverages their extensive experience to provide fast and reliable
          real-time data solutions that offer a competitive edge to our clients.
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
          <p>VISION</p>
        </div>

        <div className="visionDescription">
          <p> We're Here to Revolutionize the World of tech</p>
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
            className="visionimg"
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
        <div ref={productRef} className="productslist">
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
              measurements used to gauge a company's overall long-term
              performance. KPIs specifically help determine a company's
              strategic, financial, and operational achievements, especially
              compared to those of other businesses within the same sector.
            </p>
          </div>
          <div className="productcontent">
            <img src={product3img} alt="producticon" className="productimg" />
            <h3 className="productname">Lead Management</h3>
            <p className="productdescription">
              Lead management is the process of capturing leads, tracking their
              activities and behaviour, qualifying them, giving them constant
              attention to make them sales-ready, and then passing them on to
              the sales team.
            </p>
          </div>
        </div>
      </div>
      <div className="servicescontainer" id="services">
        <div className="linesectionproduct">
          <div className="lineproduct"></div>
        </div>
        <div className="servicesheading">
          <p>Our Services</p>
        </div>
        <div ref={scrollRef} className="serviceslist">
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
            <img src={service2img} alt="servicesimg" className="servicesimg" />
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
            <img src={service3img} alt="servicesimg" className="servicesimg" />
            <div className="servicecontent">
              <h3 className="servicesname">TESTING SERVICES</h3>
              <p className="servicesdescription">
                Our team of software application quality assurance experts and
                testers provides software testing as an independent service.
                Software testing is an essential part of our delivery process.
                We identify all the flaws, bugs and errors and debug them to
                deliver robust applications to our clients.
              </p>
            </div>
          </div>
        </div>
        <button type="button">Click for More</button>
      </div>
      <Contactus />
      <div className="linesection">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Homepage;
