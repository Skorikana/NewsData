import React from 'react'
import {Link} from "react-router-dom";
export default function Nav() {
  return (
    <div className = "homepg"> 
      <div className ="nav">
         <Link to="/">
         <div className="home1"><p>Home</p></div>
         </Link>
         <Link to="/business">
         <div className="business" ><p>Business</p></div>
         </Link>
         <Link to="/Health">
         <div className="health"><p>Health</p></div>
         </Link>
         <Link to="/entertainment">
         <div className="entertainment"><p>Entertainment</p></div>
         </Link>
         <Link to="/science">
         <div className="science"><p>Science</p></div>
         </Link>
         <Link to="/Technology">
         <div className="Technology"><p>Technology</p></div>
         </Link>
         <Link to="/sports">
         <div className="sports"><p>Sports</p></div>
       </Link>
    </div>
    </div>
  )}

