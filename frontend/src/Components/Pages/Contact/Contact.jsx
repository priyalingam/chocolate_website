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

  // form-to handle values
  const [contactdetails, setContactdetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  //to handle error
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });
  // error message handlechange function
  const errorMessage = (fieldName, fieldValue) => {
    let message = "";

    if (fieldValue === "") {
      message = "";
    }

    if (fieldName === "name") {
      if (fieldValue.length < 3) {
        message = "Name is Invaild";
      } else {
        message = "";
      }
    }

    if (fieldName === "email") {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let mail = fieldValue;
      if (!regex.test(mail)) {
        message = "email is Invaild";
      } else {
        message = "";
      }
    }

    if (fieldName === "message") {
      if (fieldValue.length < 20) {
        message = "Minimum 10 characters are allowed";
      } else {
        message = "";
      }
    }

    return { messgae: message };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let err = errorMessage(name, value);

    setError((error) => {
      return {
        ...error,
        [name]: err.messgae,
      };
    });

    setContactdetail((contactdetails) => {
      return {
        ...contactdetails,
        [name]: value,
      };
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    if (value === "") {
      setError((pre) => {
        return {
          ...pre,
          [name]: `${name} is required`,
        };
      });
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    // Prevent space as first character
    const input = e.target;
    if (key === " " && input.selectionStart === 0) {
      e.preventDefault();
    }
  };
  // to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(contactdetails.name ==="" && contactdetails.email==="" && contactdetails.message ===""){
        setError((pre) => {
        return {
          ...pre,
          name: "Name is required",
          email: "Email is required",
            message: "message is required",
        };
      });

      return
    }
    if (contactdetails.name === "") {
      setError((pre) => {
        return {
          ...pre,
          name: "Name is required",
        };
      });
       return
    }

    if (contactdetails.email === "") {
      setError((pre) => {
        return {
          ...pre,
          email: "Email is required",
        };
      });
       return
    }

    if (contactdetails.message === "") {
      setError((pre) => {
        return {
          ...pre,
          message: "message is required",
        };
      });
       return
    }
    if (error.email !== "") {
      setError((pre) => {
        return {
          ...pre,
          email: "Fill the email field",
        };
      });
       return
    }

    if (error.name !== "") {
      setError((pre) => {
        return {
          ...pre,
          name: "Fill the name feild",
        };
      });
       return
    }

    if (error.message !== "") {
      setError((pre) => {
        return {
          ...pre,
          message: "Fill the message field",
        };
      });
       return
    }
    console.log(contactdetails);

    alert(
      `Contact Details:\n\nName: ${contactdetails.name}\nEmail: ${contactdetails.email}\nMessage: ${contactdetails.message}`
    );

    setContactdetail({ name: "", email: "", message: "" });
setError({ name: "", email: "", message: "" });
  };

  console.log(error);
  console.log(contactdetails);

  return (
    <>
      <Header />
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
      </div>
      <div className="contact-form">
        <p>Feedback</p>
        <h3>Leave Your Review</h3>

        <div className="contact-form-detail">
          <form action="" className="form-style">
            <div className="contatct-name-email">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  handleKeyDown(e);

                  const key = e.key;
                  if (!/^[a-zA-Z]$/.test(key)) {
                    e.preventDefault();
                  }
                }}
              />
            
              <p className="input-error">{error.name}</p>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  handleKeyDown(e);
                }}
              />
           
               <p className="input-error">{error.email}</p>
            </div>


            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                handleKeyDown(e);
              }}
            ></textarea>
              <p className="input-error">{error.message}</p>
            <button
              type="submit"
              onClick={handleSubmit}
              className="contact-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
