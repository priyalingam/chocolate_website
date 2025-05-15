
import Footer from "./Components/Common/Layout/Footer/Footer"
import Header from "./Components/Common/Layout/Header/Header"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "./Components/Pages/About/About"
import Product from "./Components/Pages/Product/Product"
import Contact from "./Components/Pages/Contact/Contact"
import Title from "./Components/Common/Layout/Title/Title"
import Home from "./Components/Pages/Home/Home"
import Productdetail from "./Components/Pages/Product/Productdetail/Productdetail"
import "./App.css";
import ScrollToTop from "./Components/Common/Layout/Scroll/Scrolltop"


function App() {


  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
        <Route path="/productdetail" element={<Productdetail/>} />
      <Route path="/contact" element={<Contact />}/>
      
    </Routes>
    
    
    </BrowserRouter>
    

    </>
  )
}

export default App
