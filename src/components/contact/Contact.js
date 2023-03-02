import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact" id="contact">
//       <div className="contact-container">
//         <h2 className="contact-title">Contact</h2>
//         <p className="contact-description">
//           Feel free to reach out to me and I will be in touch with you shortly!
//         </p>
//         <form className="contact-form">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             className="name-input-box"
//             id="name"
//             required
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="email-input-box"
//             id="email"
//             required
//           />
//           <label htmlFor="message">Message</label>
//           <textarea
//             type="text"
//             name="message"
//             placeholder="Enter a message"
//             className="message-input-box"
//             id="message"
//           />
//           <button className="submit-btn">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

const Contact = () => {
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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out to me by submitting the form below and I will
          get back to you as soon as possible!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="name-input-box"
            id="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
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
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
