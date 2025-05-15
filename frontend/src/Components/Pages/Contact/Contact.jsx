import React, { useRef, useState } from "react";
import Header from "../../Common/Layout/Header/Header";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SiClockify } from "react-icons/si";
import Footer from "../../Common/Layout/Footer/Footer";
import Headerbg from "../../Common/Layout/Headerbg/Headerbg";
import emailjs from "emailjs-com";
function Contact() {
  const form = useRef();

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    console.log(name,email,message)

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      setError("Message must be at least 10 characters long.");
      return;
    }

 
  };

  return (
    <>
      <Header />
      <Headerbg title={"Contact"} />
      <div className="footer-address-details">
        <div className="footer-icon">
          <FaLocationDot className="footer-icon-style" />
          <h3>Location</h3>

          <p>29 Nicolas str, New York,</p>
          <p> 987597-50</p>
        </div>
        <div className="footer-icon">
          <BiSolidPhoneCall className="footer-icon-style" />
          <h3>Phones</h3>

          <p>0(800) 890-90-609</p>
          <p>0(800) 890-90-620</p>
        </div>
        <div className="footer-icon">
          <MdEmail className="footer-icon-style" />
          <h3>Email</h3>

          <p>sale@like-themes.com</p>
          <p>tech@like-themes.com</p>
        </div>
        <div className="footer-icon">
          <SiClockify className="footer-icon-style" />
          <h3>Working Hours</h3>

          <p>Wednesday - Sunday</p>
          <p>7:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="footer-map">
        <div className="footer-map-style">
          <iframe
            loading="lazy"
            allowfullscreen
            src="https://maps.google.com/maps?q=Hello+technologies%2Cguru+theatre+%2Cmadurai&output=embed"
          ></iframe>
        </div>
      </div>
      <div className="contact-form">
        <p>Feedback</p>
        <h3>Leave Your Review</h3>

        <div className="contact-form-detail">
          <form
            action=""
            className="form-style"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="contatct-name-email">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact-button">
              Submit
            </button>
            <br />
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
