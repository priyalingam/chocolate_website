
import Header from "../../Common/Layout/Header/Header";

import "./About.css";


import chef1 from '../../../assets/aboutp1.jpg'
import chef2 from '../../../assets/aboutp2.jpg'
import chef3 from '../../../assets/aboutp3.jpg'
import chef4 from '../../../assets/aboutp4.jpg'
import Footer from "../../Common/Layout/Footer/Footer";
import Headerbg from "../../Common/Layout/Headerbg/Headerbg";
import AboutSection from "./Aboutsection/AboutSection";
import AboutParallex from "./AboutParallex/AboutParallex";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate=useNavigate();
  const handlechef=()=>{
    navigate('/contact')

  }
  return (
    <>
      <Header/> 
      <Headerbg title={"About"}/>
      <AboutSection/>
      <AboutParallex/>
      
   
      <div className="chef-details">
        
        <h2>Meet Our Confectioners</h2>
        <div className="chef-image-container">

          <div className="chef-image">
            <img src={chef1} alt="" />
             <h3>Bhat</h3>
             <p>Confectioner</p>

          </div>
          <div className="chef-image">
             <img src={chef2} alt="" />
              <h3>Barley</h3>
              <p>pastry chef</p>

          </div>
          <div className="chef-image">
             <img src={chef3} alt="" />
             <h3>John Portman</h3>
             <p>confectiner</p>

          </div>
          <div className="chef-image">
             <img src={chef4} alt="" />
              <h3>Jeffry</h3>
              <p>Barista</p>

          </div>
   
        </div>
        <button className="chef-button" onClick={handlechef}>Read More</button>
        
      </div>
    
      <Footer/>

    </>
  );
}

export default About;
