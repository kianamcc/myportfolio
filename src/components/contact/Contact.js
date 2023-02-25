import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out to me and I will be in touch with you shortly!
        </p>
        <form action="submit" className="contact-form">
          <input type="text" placeholder="Name" className="name-input-box" />
          <input type="email" placeholder="Email" className="email-input-box" />
          <textarea
            type="text"
            placeholder="Message"
            className="message-input-box"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
