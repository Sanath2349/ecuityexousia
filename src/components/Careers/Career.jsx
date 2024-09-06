import React from "react";
import "./Career.css";
import jobhero from "../../assests/job-hiring-vacancy-team-interview-career-recruiting.jpg";
import work from "../../assests/work.png";
import culture from "../../assests/culture.png";
import growth from "../../assests/growth.png";
import { useNavigate } from "react-router-dom";

export default function Career() {

    const navigate = useNavigate();

    const handlecontact = () => {
        navigate("/contactus");
        
      };

  return (
    <div className="career-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Your Dream Job Awaits</h1>
          <p>
            Join us and be part of an innovative team shaping the future of
            technology.
          </p>

          <a href="#openings"><button className="cta-button" >Explore Opportunities</button></a>
          
        </div>
        <img src={jobhero} alt="Career Hero" className="hero-image" />
      </section>

      <section className="benefits-section">
        <h2>Why Work With Us?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <img src={work} alt="Flexibility" />
            <h3>Flexible Working Hours</h3>
            <p>Enjoy the freedom to work when you're most productive.</p>
          </div>
          <div className="benefit-card">
            <img src={culture} alt="Culture" />
            <h3>Inspiring Culture</h3>
            <p>
              A work environment that promotes innovation, creativity, and
              personal growth.
            </p>
          </div>
          <div className="benefit-card">
            <img src={growth} alt="Growth" />
            <h3>Career Growth</h3>
            <p>
              Advance your career with ample opportunities for learning and
              development.
            </p>
          </div>
        </div>
      </section>

      <section id="openings" className="positions-section">
        <h2>Open Positions</h2>
        <div className="job-listings">
          <div className="job-card">
            <h3>Frontend Developer</h3>

            <button className="apply-button" onClick={handlecontact} >Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Backend Developer</h3>

            <button className="apply-button" onClick={handlecontact}>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>

            <button className="apply-button" onClick={handlecontact}>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>DEVOPS Engineer</h3>

            <button className="apply-button" onClick={handlecontact}>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>Quality Analyst</h3>

            <button className="apply-button" onClick={handlecontact}>Apply Now</button>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Team Says</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "Working here has been an amazing experience. The team is
              incredibly supportive, and the projects are truly cutting-edge."
            </p>
            <span>- MD.MUSTAQ, Operations Manager</span>
          </div>
           
          <div className="testimonial">
            <p>
              "The opportunities for growth and the company's culture of
              inclusivity have really made a difference in my career."
            </p>
            <span>- Sandeep, Devops Team Lead</span>
          </div>




          <div className="testimonial">
            <p>
              "The opportunities for growth and the company's culture of
              inclusivity have really made a difference in my career."
            </p>
            <span>- DILIP, Communication Trainer</span>
          </div>
        </div>
      </section>
    </div>
  );
}
