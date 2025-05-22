import React from 'react'
import Header from '../../../Common/Layout/Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../../Common/Layout/Footer/Footer'
import Headerbg from '../../../Common/Layout/Headerbg/Headerbg'
import './Productdetail.css'

function Productdetail() {
    const navigate=useNavigate()
    const {state}=useLocation()
    // console.log(state)
 const handlenavigate=()=>{
    navigate('/product')
 }
  return (
 <>
 <Header/>
 <Headerbg   title={"Details"}/>
 
    {state && (
        <div className="product-details">
            <div className="product-details-container">

 <div className="product-details-img">
        <img src={state?.img} alt="" />
    </div>
    <div className="product-details-content">
        <h2 className='product-details-name'>{state.name}</h2>
        <h3 className='product-details-price'>$ {state.price}</h3>
        <h4 className='product-details-categories'><strong>Categories :  </strong>{state.categories}</h4>
        <h4 className='product-details-tags'><strong>Tags :  </strong>{state.tags}</h4>
        <h3>Description</h3>
        <p>{state.description}</p>

    </div>
     </div>
     <button className='productdetail-btn' onClick={handlenavigate}>Back</button>

        </div>
        
   
   

    ) }
   


 <Footer/>

 
 </>
  )
}

export default Productdetail