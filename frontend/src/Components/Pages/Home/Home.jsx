import React from 'react'
import Header from '../../Common/Layout/Header/Header'
import Caurosel from '../../Common/Layout/Header/Caurosel'
import ProductSlice from './ProductSlice/ProductSlice'
import AboutSection from '../About/Aboutsection/AboutSection'
import AboutParallex from '../About/AboutParallex/AboutParallex'
import Homeparallex from './HomeParallex/Homeparallex'
import Footer from '../../Common/Layout/Footer/Footer'

function Home() {

   
  return (
    <>
    <Header/> 
    <Caurosel/>
    <AboutSection/>
   <Homeparallex/>
   <ProductSlice/>
   <Footer/>
   
    
    </>
  )
}

export default Home