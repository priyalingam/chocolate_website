import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import caro from '../../../../assets/headercaro.jpg'
import caro2 from '../../../../assets/headercaro2.jpg'
import caro3 from '../../../../assets/headercaro3.jpg'
import {  useNavigate } from 'react-router-dom';

function Caurosel() {

  const navigate=useNavigate()
  const handlenavigateabout=()=>{
    navigate('/about')
  }

  const handlenavigateproduct=()=>{
    navigate('/product')
  }
  const handlenavigatecontact=()=>{
    navigate('/contact')
  }
  return (
<>
<Carousel>
      <Carousel.Item interval={1000}>
        
        <img src={caro2} alt="" text="First slide" className='caro-img'/>
        <Carousel.Caption className='Caro-header-style'>
          <h3>Authors's Delicious sweets</h3> 
          <h2>and Chocolate</h2>
          <p>Because every sweet tells a story</p>
          <button className='caro-btn' onClick={handlenavigateabout}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={caro} alt="" text="Second slide" className='caro-img' />
        <Carousel.Caption className='Caro-header-style'>
          <h3> A Tale of Sweets and </h3> 
          <h2>Chocolate Dreams</h2>
          <p>Indulge in our signature collection of literary-inspired treats</p>
          <button className='caro-btn'  onClick={handlenavigateproduct}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img src={caro3} alt="" text="Third slide" className='caro-img'/>
       <Carousel.Caption className='Caro-header-style'>
          <h3>Turn the Page</h3> 
          <h2>Take a Bite</h2>
          <p>Unwrap something extraordinary</p>
          <button className='caro-btn'  onClick={handlenavigatecontact}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</>
  )
}

export default Caurosel