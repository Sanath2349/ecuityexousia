import React from "react";
import '../../Homepage/Homepage.css'

const Contactus = () => {
  return (
    <div className="contactUs">
      <div className="contactUsHeading">
        <p>Contact Us</p>
      </div>
      <form className="contactform">
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">Mail</label>
          <input type="mail" />
        </div>
        <div>
          <label htmlFor="name">Phone Number</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div>
          <button type="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
