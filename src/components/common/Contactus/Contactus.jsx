import React, { useRef, useState } from "react";
import "../../Homepage/Homepage.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contactus = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    number: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_csb6vhg", "template_0n2g1u9", form.current, {
        publicKey: "PQ_Hh2A8n9qtBnKJt",
      })
      .then(
        () => {
          console.log(formData);
          console.log("SUCCESS!");
          toast.success("Thank you, we will get back to you soon");
          setFormData({
            user_name: "",
            user_email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(
            "currently we are having server issue we will get back to you soon"
          );
        }
      )
      .catch((error) => {
        console.error("Failed...", error);
      });
  };
  return (
    <div className="contactUs">
      <div className="contactUsHeading">
        <p>Contact Us</p>
      </div>
      <div className="map">
        <div className="mapframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3796484095146!2d78.39008137462919!3d17.48938139985991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82d28099d7001503%3A0xcbbd13ee8d4fb8c1!2sEcuity%20Exousia%20Software!5e0!3m2!1sen!2sin!4v1725538132914!5m2!1sen!2sin"
            style={{ border: 0, width: "500px", height: "350px" }}
            // loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="contactform" ref={form} onSubmit={handlesubmit}>
          <div>
            <label htmlFor="user_name">Your Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="user_name"
              value={formData.user_name}
            />
          </div>
          <div>
            <label htmlFor="user_email">Mail</label>
            <input
              type="email"
              onChange={handleChange}
              name="user_email"
              value={formData.user_email}
            />
          </div>
          <div>
            <label htmlFor="name">Phone Number</label>
            <input
              type="tel"
              name="number"
              onChange={handleChange}
              value={formData.number}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          <div>
            <button type="submit" value="Send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
