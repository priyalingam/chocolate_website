
import './Header.css'
import React, { useEffect, useState } from 'react';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import logo from '../../../../assets/navlogo.png'

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';


function Header() {

    const [isSticky,setIsSticky]=useState(false)
    const [open,setOpen]=useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setIsSticky(scrollTop > 300);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const location=useLocation()

    console.log(location)

    const drawerOpen=()=>{
setOpen(true)
    }


    console.log(open)
    const drawerClose = () => setOpen(false);

  return (
   <>
   <div className={`header-nav ${isSticky ?"color-change":""}`}>
    <div className="header-icon">
        <img src={logo} alt="" />

    </div>
    <div className="header-nav-link">
     <Link to='/' className={`anchor ${location.pathname==="/" ?"active" :""}`}>Home</Link>
      <Link to='/about' className={`anchor ${location.pathname==='/about' ? "active":""}`}>About</Link>
       <Link to='/product' className={`anchor ${location.pathname==='/product' ? "active": ""}`}>Product</Link>
        <Link to='/contact'className={`anchor ${location.pathname==='/contact' ? "active": ""}`}>Contact</Link>
        

    </div>
    <div className="header-contact">
        <p>CONTACT</p>
        <span>+91 98765 43210</span>
        

    </div>
    <div className='header-icons'>
        <MdOutlineMenu onClick={drawerOpen}/>
    </div>
   </div>
   
 <Drawer
                anchor="right"
                open={open}
                onClose={drawerClose}
            >
                <div className="drawer-content">
                    <div className="drawer-header">
                        <MdClose className="drawer-close-icon" onClick={drawerClose} />
                        <img src={logo} alt="logo" className="drawer-logo" />
                    </div>
                    <div className="drawer-links">
                        <Link to="/" onClick={drawerClose} className={`drawer-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                        <Link to="/about" onClick={drawerClose} className={`drawer-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
                        <Link to="/product" onClick={drawerClose} className={`drawer-link ${location.pathname === "/product" ? "active" : ""}`}>Product</Link>
                        <Link to="/contact" onClick={drawerClose} className={`drawer-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                    </div>
                </div>
            </Drawer>
 
    
   </>
  )
}

export default Header