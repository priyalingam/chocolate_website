import React from "react";
import image1 from "../../../../assets/about1.jpg";
import image2 from "../../../../assets/about2.jpg";
import { FiFileText } from "react-icons/fi";
import "./AboutSection.css";
import { useNavigate } from "react-router-dom";

import price from "../../../../assets/price.pdf"
function AboutSection() {

const navigate=useNavigate();
const handlenavigate=()=>{
  navigate('/about')
}


const download=()=>{
 const link = document.createElement("a");
  link.href = price;
  link.download = "price.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  return (
    <>
      <div className="about-section1">
        <div className="about-section-content">
          <h4>
            Our patisserie produces <span>unique sweets</span> for lovers of
            yummy
          </h4>
          <p>
            At our patisserie, we don't just make sweets — we create moments of
            joy. Each treat is crafted with passion, precision, and a pinch of
            magic to delight anyone who truly loves the art of indulgence. From
            melt-in-your-mouth chocolates to delicate pastries bursting with
            flavor, our creations are made for those who crave something beyond
            the ordinary. Whether you're treating yourself or sharing with
            someone special, our unique sweets are the perfect way to say: life
            is meant to be savored.
          </p>
          <p>
            {" "}
            <FiFileText className="about-file-icon" />{" "}
            <span onClick={download}>Downlod Price</span>
          </p>
          <button className="about-button" onClick={handlenavigate}>Read More</button>

          <a href="Download-price"></a>
        </div>
        <div className="about-section-img1">
          <img src={image1} alt="" />
        </div>
        <div className="about-section-img2">
          <img src={image2} alt="" />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
