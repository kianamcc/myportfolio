import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out to me and I will be in touch with you shortly!
        </p>
        <form action="submit" className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="name-input-box"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input-box"
            id="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            placeholder="Enter a message"
            className="message-input-box"
            id="message"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
