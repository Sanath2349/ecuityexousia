import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Slider.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 5000; // 3 seconds interval

  // Function to add section elements to refs
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Set up the interval for automatic sliding
    const intervalId = setInterval(
      () => slideToIndex(currentIndex + 1),
      slideDuration
    );

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const animateContent = () => {
    gsap.from(".content", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1,
      stagger:1,
      scrollTrigger: {
        trigger: ".content",
        scroller: "body",
        start: "top 50%",
      },
    });
  };

  // Function to slide to a specific index
  const slideToIndex = (index) => {
    const nextIndex = index % sectionRefs.current.length;
    setCurrentIndex(nextIndex);

    // GSAP animation to slide to the current section
    gsap.to(sectionRefs.current, {
      xPercent: -100 * nextIndex,
      duration: 1, // 1 second transition time
      ease: "power2.inOut",
    });

    gsap.from(sectionRefs.current, {
        opacity:0,
        delay:0.1,
        duration: 1.5, // 1 second transition time
        ease: "power2.inOut",
      });

    gsap.from(".content h3", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".content",
          scroller: "body",
        //   start: "top 50%",
        },
      });


      gsap.from(".content p", {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".content",
          scroller: "body",
        //   start: "top 50%",
        },
      });
    // animateContent();
  };

  // Handle clicking the next button
  const handleNext = () => {
    slideToIndex(currentIndex + 1);
  };

  // Handle clicking the previous button
  const handlePrev = () => {
    slideToIndex(
      (currentIndex - 1 + sectionRefs.current.length) %
        sectionRefs.current.length
    );
  };

  useGSAP(() => {
    gsap.from(".content h3", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1,
    });
  });

  return (
    <div
      className="hero-container"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="sections-wrapper" style={{ display: "flex" }}>
        <section
          ref={addToRefs}
          className="section1"
          style={{
            minWidth: "100vw",
            height: "100vh",
            // backgroundColor: "#FF5733",
          }}
        >
          <div className="content">
            <h3>Web Development</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              porro.
            </p>
            <button>More</button>
          </div>
        </section>
        <section
          ref={addToRefs}
          className="section2"
          style={{
            minWidth: "100vw",
            height: "100vh",
            // backgroundColor: "#33FF57",
          }}
        >
          <div className="content">
            <h3>Mobile App Development</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              porro.
            </p>
          </div>
        </section>
        <section
          ref={addToRefs}
          className="section3"
          style={{
            minWidth: "100vw",
            height: "100vh",
            // backgroundColor: "#3357FF",
          }}
        >
          <div className="content">
            <h3>DEVOPS</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              porro.
            </p>
          </div>
        </section>
        <section
          ref={addToRefs}
          className="section4"
          style={{
            minWidth: "100vw",
            height: "100vh",
            // backgroundColor: "#33FF57",
          }}
        >
          <div className="content">
            <h3>
            DATA ANALYTICS</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              porro.
            </p>
          </div>
        </section>
        <section
          ref={addToRefs}
          className="section5"
          style={{
            minWidth: "100vw",
            height: "100vh",
            // backgroundColor: "#3357FF",
          }}
        >
          <div className="content">
            <h3>TESTING SERVICES</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              porro.
            </p>
          </div>
        </section>
      </div>

      {/* Navigation Buttons */}
      <button
        className="nav-button left-button"
        onClick={handlePrev}
        // style={buttonStyle}
      >
        ❮
      </button>
      <button
        className="nav-button right-button"
        onClick={handleNext}
        // style={buttonStyle}
      >
        ❯
      </button>
    </div>
  );
};

// Style for buttons
const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "10px 15px",
  fontSize: "20px",
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  border: "none",
  cursor: "pointer",
  zIndex: 10,
};

buttonStyle.left = "10px"; // Positioning for left button
buttonStyle.right = "10px"; // Positioning for right button

export default Slider;