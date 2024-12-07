/**
 * @copyright 2024 Romany
 * @license Apache-2.0
 */

// Import React, SweetAlert2, and other necessary libraries
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(); // Reference to the form element
  const [currentTime, setCurrentTime] = useState("");

  // Update current time continuously every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString();
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form.current);
    const user_name = formData.get("name");
    const user_email = formData.get("email");
    const user_phone = formData.get("phone");
    const user_reason = form.current.querySelector("#user_reason").selectedOptions[0].text;
    const user_message = formData.get("message"); // Correctly getting the message

    // Log form values to check if they are being captured correctly
    console.log("Name: ", user_name);
    console.log("Email: ", user_email);
    console.log("Phone: ", user_phone);
    console.log("Reason: ", user_reason);
    console.log("Message: ", user_message); // Check if this is null or contains a value

    // If any field is missing or message is empty, prevent form submission
    if (!user_message || !user_name || !user_email || !user_phone || !user_reason) {
      Swal.fire({
        icon: "error",
        title: "Form Incomplete",
        text: "Please fill in all the fields before submitting.",
        confirmButtonColor: "#e53935",
      });
      return;
    }

    const templateParams = {
      user_name,
      user_email,
      user_phone,
      user_reason,
      user_message,
      current_time: currentTime,
    };

    // Send email via EmailJS
    emailjs
      .send("Romany_Rizieq", "Romany_RIzieq_Template", templateParams, "VfS4cEgX5DIbIBbA_")
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#00bcd4",
          });
          form.current.reset(); // Reset form after submission
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Message Failed!",
            text: `Failed to send message. Please try again. (${error.text})`,
            confirmButtonColor: "#e53935",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-center min-h-screen bg-fixed py-20 px-6 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${import.meta.env.BASE_URL}images/background_black.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="form-container text-black bg-gradient-to-r from-blue-800 to-purple-800">
        <h1>Contact Me</h1>
        <p>Please take a moment to get in touch. I will get back to you shortly.</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="column">
            <label htmlFor="the-name">Your Name</label>
            <input type="text" name="name" id="user_name" required />

            <label htmlFor="the-email">Email Address</label>
            <input type="email" name="email" id="user_email" required />

            <label htmlFor="the-phone">Phone Number</label>
            <input type="tel" name="phone" id="user_phone" required />

            <label htmlFor="the-reason">How can we help you?</label>
            <select name="reason" id="user_reason" defaultValue="" required>
              <option value="" disabled>
                Choose one
              </option>
              <option value="Aerospace">I need you as an Aerospace Engineer</option>
              <option value="Web">I need you as a Frontend Developer</option>
              <option value="Mechanical">I need you as an Automotive Engineer</option>
              <option value="Another">Another thing</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="the-message">Message</label>
            <textarea name="message" id="user_message" required></textarea>
            <input type="submit" value="Send Message" className="submit-button" />
            <img
              src={import.meta.env.BASE_URL + "images/4202011_email_gmail_mail_logo_social_icon.png"}
              alt="Gmail Logo"
              className="mx-auto w-20 h-20 mb-4 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
