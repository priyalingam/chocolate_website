import { GiThreeLeaves } from "react-icons/gi";
import { LuPackageOpen } from "react-icons/lu";
import { GiChocolateBar } from "react-icons/gi";
import { MdSlowMotionVideo } from "react-icons/md";
import './AboutParallex.css'

function AboutParallex() {

  const handlevideo=()=>{
    window.open("https://www.youtube.com", "_blank");


  }
  return (
   <>
      <div className="about-icons">
        <div className="about-icon-details">
          <div className="about-icon1-image">
            <GiThreeLeaves  className="about-icon-style"/>

          </div>
          <div className="about-icon1-content">
            <h4>Natural Organic Product
</h4>
<p>Our Natural Organic line is crafted with care using only the finest ingredients sourced directly from nature.</p>
          </div>


        </div>
         <div className="about-icon-details">
          <div className="about-icon1-image">
            <LuPackageOpen  className="about-icon-style"/>

          </div>
          <div className="about-icon1-content">
            <h4>Packaging Design

</h4>
<p>At the heart of our Natural Organic Product is a deep respect for nature and a commitment to your well-being.</p>
          </div>
          
        </div>
         <div className="about-icon-details">
          <div className="about-icon1-image">
            <GiChocolateBar  className="about-icon-style"/>

          

          </div>
          <div className="about-icon1-content">
            <h4>Best Quality Cocoa

</h4>
<p>Free from artificial additives, our cocoa brings the authentic taste of nature’s best, offering a deep, complex flavor profile that cocoa lovers cherish.
</p>
          </div>

          
        </div>
       
      </div>
      <div className="about-parallex1">
        <div className="parallex-opacity">
<h2>Not just sweets — sweet 
<span> expressions of love </span></h2>
        </div>

        

      </div>
      <div className="about-notes">
        <div className="about-card-stickers">
          <h2>230</h2>
          <h3>Pastry Shops</h3>

        </div>
          <div className="about-card-stickers">
             <h2>26</h2>
          <h3>Candies collections</h3>

          
        </div>
          <div className="about-card-stickers">
             <h2>14</h2>
          <h3>Years Of Experience</h3>

          
        </div>
          <div className="about-card-stickers">
             <h2>80</h2>
          <h3>Creative chefs</h3>

          
        </div>

      </div>
      <div className="about-parallex2">
        <div className="parallex-opacity">
           <h2>Watch Video</h2>
        <MdSlowMotionVideo className="about-video" onClick={handlevideo} />


        </div>
       



      </div>
   
   </>
  )
}

export default AboutParallex