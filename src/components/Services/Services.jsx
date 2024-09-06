import React, { useRef } from "react";
import service1img from "../../assests/ui.png";
import service2img from "../../assests/app-development.png";
import service3img from "../../assests/software-developer.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
 const ServicesRef = useRef()

  useGSAP(() => {
    const boxes = gsap.utils.toArray(ServicesRef.current.children);
    boxes.forEach((box) => {
      gsap.from(box, {
        y: 80,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          scroller: "body",
          // markers: true,
          start: "top 80%",
          end: "top 60%",
        },
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <div className="servicesPage">
      <div className="heroServices">
        <div className="servicesintro">
          <h1>Our Services</h1>
          <p>
            Software Application Development, Mobile Application Development,
            Software Application Testing Services, IOT, Power BI, Embedded
            Solutions, Hardware & Networking Services, Corporate Training,
            Digital Marketing, Security & Surveillance Access Management and HR
            Consulting Services.
          </p>
        </div>
      </div>
      <div ref={ServicesRef} className="servicesgrid">
        <div className="services">
          <img src={service1img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">UI/UX DESIGN</h3>
            <p className="servicesdescription">
              UI/UX design, which stands for User Interface/User Experience
              design, is a critical aspect of creating digital products,
              including websites, mobile apps, and software applications. UI/UX
              design focuses on enhancing the usability, accessibility, and
              overall satisfaction users experience when interacting with a
              product.
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
              Software testing is an essential part of our delivery process. We
              identify all the flaws, bugs and errors and debug them to deliver
              robust applications to our clients.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={service1img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">Application Development</h3>
            <p className="servicesdescription">
              Application development refers to the process of creating software
              applications that fulfill specific tasks or provide particular
              functions for users. Thisprocess involves a series of steps from
              conceptualization to deployment and maintenance.Here's an overview
              of the typical stages involved in application development Crafting
              digital solutions tailored to meet specific business needs and
              user requirements.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={service2img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">Product Development</h3>
            <p className="servicesdescription">
              teratively designing and building innovative offerings that
              address market demands and user preferences.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={service3img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">MOBILE APPLICATION</h3>
            <p className="servicesdescription">
              Our team extends feature-rich mobile apps for iOS, Android and
              Windows Phone for information on the go. We develop apps for
              business, games, location tracking, social media and various other
              requirements. Our team of designers, developers and testers can
              help you from concept to final launch of your mobile application.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={service1img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">PRODUCT MAINTENANCE</h3>
            <p className="servicesdescription">
              Our support and maintenance service is flexible just like our
              other service offerings, as per the complexities and needs of the
              project. From a need as small as allocating certain fixed number
              of hours for product or software maintenance per month, to a
              dedicated team working on your software maintenance and support
              for the entire contract period.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={service2img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">SECURITY & SURVEILLANCE</h3>
            <p className="servicesdescription">
              Surveillance is the monitoring of behavior, activities, or other
              changing information for the purpose of influencing, managing,
              directing, or protecting people. This can include observation from
              a distance by means of electronic equipment (such as closed
              circuit television (CCTV) cameras) or interception of
              electronically transmitted information (such as Internet traffic
              or phone calls).
            </p>
          </div>
        </div>
        <div className="services">
          <img src={service3img} alt="servicesimg" className="servicesimg" />
          <div className="servicecontent">
            <h3 className="servicesname">PYTHON</h3>
            <p className="servicesdescription">
              Our team of software application quality assurance experts and
              testers provides software testing as an independent service.
              Software testing is an essential part of our delivery process. We
              identify all the flaws, bugs and errors and debug them to deliver
              robust applications to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
