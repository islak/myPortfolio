import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for any inquiries or just to say hi!</p>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
});

export default Contact;
