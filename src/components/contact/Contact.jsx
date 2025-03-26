import React, { useState } from "react";
import "../contact/Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};
    
    if (!data.get('name') || data.get('name').trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    
    if (!data.get('phone') || !/^[0-9+\-\s()]{10,15}$/.test(data.get('phone'))) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!data.get('message') || data.get('message').trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    setFormErrors({});
    
    const formData = new FormData(event.target);
    
    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    // Add access key
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
          // No Content-Type header when using FormData as it sets the correct boundary
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(`Submission error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" name="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg-icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail-icon" />
            contact@GreatStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="phone-icon" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="location-icon" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} aria-label="Contact form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            aria-required="true"
            aria-invalid={!!formErrors.name}
            required
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Your Mobile Number"
            aria-required="true"
            aria-invalid={!!formErrors.phone}
            required
          />
          {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          
          <label htmlFor="message">Write Your Message here</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message"
            aria-required="true"
            aria-invalid={!!formErrors.message}
            required
          ></textarea>
          {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          
          <button 
            type="submit" 
            className="btn dark-btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"} 
            {!isSubmitting && <img src={white_arrow} alt="" />}
          </button>
        </form>
        {result && <span className={result.includes("Successfully") ? "success-message" : "error-message"}>{result}</span>}
      </div>
    </div>
  );
};

export default Contact;
