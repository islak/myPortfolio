// Contact.js
import React, { forwardRef, useState } from 'react';
import { MdEmail } from 'react-icons/md';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // You can add additional logic here, e.g., showing a success message
      } else {
        console.error('Failed to send email.');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact" ref={ref}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for any inquiries or just to say hi!</p>
      <form onSubmit={handleFormSubmit}>
        {/* ... other form fields ... */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
});

export default Contact;
