import React from "react";
import "./Footer.css";
import image1 from "../../../../assets/navlogo.png";
import post1 from "../../../../assets/Footer1.jpg";
import post2 from "../../../../assets/footer2.jpg";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
// karthucj
function Footer() {

  const email = "someone@example.com";
  const subject = "Hello";
  const body = "I want to get in touch with you.";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;



  
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
        <div className="footer-links">
          <div className="footer-logo">
            <img src={image1} alt="" />
          </div>
          <div className="footer-logo-Text">
            <p>
              Experience the perfect balance of cream and sweetness  
              Cream Delicious Sweets are pure indulgence
              <br />where every bite is a taste of heaven
            </p>
          </div>
          <div className="footer-links-details">
            <span>
              <BsTwitter className="logo-style" />
            </span>

            <span>
              <FaFacebookF className="logo-style"/>
            </span>
            <span>
              <AiFillInstagram className="logo-style"/>
            </span>

            <span>
              <IoLogoYoutube className="logo-style"/>
            </span>
          </div>
        </div>
        <div className="footer-explore">
          <div className="explore-heading">
            <h3>Explore</h3>
            
            <div className="footer-explore-details">
              <div className="explore-icon">
              <FaPhoneVolume />
              </div>
              <div className="explore-text">
                <p>Phone</p>
                <a href="tel:+91 987-6543-210" style={{textDecoration:"None",color:"white"}}><h4>+91 98765 43210</h4></a>
              

              </div>
            </div>
            <div className="footer-explore-details">
              <div className="explore-icon">
              <FaLocationDot />
              </div>
              <div className="explore-text">
                <p> Our Location</p>
                 <a
  href="https://maps.google.com/maps?q=opposite+to+Meenakshi+Amma+temple%2CMadurai"
  target="_blank"
  rel="noopener noreferrer" style={{textDecoration:"None",color:"white"}}
>
   <h4>Opposite to Meenakshi Amman Temple, Madurai</h4>
</a>
                
              </div>
            </div>
            <div className="footer-explore-details">
              <div className="explore-icon">
              <TbMailFilled />
              </div>
              <div className="explore-text">
                <p>Email</p>
                <a href={gmailLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:"None",color:"white"}}>
       <h4>priyalingam2612@gmail.com
                </h4>
    </a>
               
              </div>
            </div>
          </div>
        </div>
        <div className="footer-post">
          <div className="footer-post-text">
            <h3>Latests Post</h3>
          </div>
          <div className="footer-post-details">
            <div className="footer-post-image">
            <img src={post1} alt="" />
            </div>
            <div className="footer-post-text">
            <a href="">CRAFT POST</a>
            <h6>Rent of Equipment for Pastry Shops</h6>
            </div>
           
          </div>
          <div className="footer-post-details">
            <div className="footer-post-image">
            <img src={post2} alt="" />
            </div>
            <div className="footer-post-text">
            <a href="">CRAFT FOOD</a>
            <h6>Secrets of Choosing Cocoa Powder</h6>
            </div>
           
           
          </div>
        </div>

        </div>
        
      </div>
    </>
  );
}

export default Footer;
