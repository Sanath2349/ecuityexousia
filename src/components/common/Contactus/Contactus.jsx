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
          toast.error("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div className="contactUs">
      <div className="contactUsHeading">
        <p>Contact Us</p>
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
  );
};

export default Contactus;
