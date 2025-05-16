import React, { useRef, useState } from "react";
import Header from "../../Common/Layout/Header/Header";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SiClockify } from "react-icons/si";
import Footer from "../../Common/Layout/Footer/Footer";
import Headerbg from "../../Common/Layout/Headerbg/Headerbg";

function Contact() {
  // Email Link

  const email = "someone@example.com";
  const subject = "Hello";
  const body = "I want to get in touch with you.";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  //form
  

  return (
    <>
      {/* <Header />
      <Headerbg title={"Contact"} />
      <div className="footer-address-details">
        <div className="footer-icon">
          <FaLocationDot className="footer-icon-style" />
          <h3>Location</h3>

          <a
            href="https://maps.google.com/maps?q=opposite+to+Meenakshi+Amma+temple%2CMadurai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "None" }}
          >
            <p>Opposite to Meenakshi Amman Temple, Madurai</p>
          </a>
        </div>
        <div className="footer-icon">
          <BiSolidPhoneCall className="footer-icon-style" />
          <h3>Phones</h3>

          <a
            href="tel:+91 987-6543-210"
            style={{ textDecoration: "None", color: "white" }}
          >
            <p>+91 98765 43210</p>
          </a>
        </div>
        <div className="footer-icon">
          <MdEmail className="footer-icon-style" />
          <h3>Email</h3>
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "None", color: "white" }}
          >
            <p>priyalingam2612@gmail.com</p>
          </a>
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
            src="https://maps.google.com/maps?q=opposite+to+Meenakshi+Amma+temple%2CMadurai&output=embed"
          ></iframe>
        </div>
      </div> */}
      <div className="contact-form">
        <p>Feedback</p>
        <h3>Leave Your Review</h3>

        <div className="contact-form-detail">
          <form
            action=""
            className="form-style"
            
            
          >
            <div className="contatct-name-email">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
               
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
               
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              
            ></textarea>
            <button type="submit" className="contact-button">
              Submit
            </button>
            
           
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
