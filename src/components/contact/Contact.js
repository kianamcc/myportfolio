import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rxcxqaw",
        "template_mbfnh0j",
        form.current,
        "aMVkzXndoCy2H8xMz"
      )
      .then(
        (result) => {
          console.log("test", result.text);
          console.log("message sent!");
          setFormSubmit((prev) => true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="Contact" style={{ marginBottom: "40px" }}>
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>

        <p className="contact-description section-paragraph">
          Connect with me via{" "}
          <a
            href="https://github.com/kianamcc"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/kiana-mccullough/"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
          >
            LinkedIn
          </a>
          ,{" "}
          <a href="mailto:kianamccu@gmail.com" className="contact-social-link">
            email
          </a>
          , or use the contact form below!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="name-input-box"
            id="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="Enter your email"
            className="email-input-box"
            id="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Enter a message"
            className="message-input-box"
            id="message"
          />
          {formSubmit && (
            <h4 className="form-submit-msg">Thank you for your message!</h4>
          )}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
