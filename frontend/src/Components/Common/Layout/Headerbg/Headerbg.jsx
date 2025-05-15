import React from 'react'
import './Headerbg.css'
import { Link } from "react-router-dom";
function Headerbg(props) {
    const {title}=props;
    console.log(props)
  return (
    <>
    <div className="header-card-bg">
        <div className="header-card-opacity">
          <div className="header-card-text-content">
            <h1>{title}</h1>
            <Link to="/" className="header-card-link">
              {" "}
              Home //<strong>{title}</strong>
            </Link>
          </div>
        </div>
      </div>
    </>
   
  )
}

export default Headerbg