import React from 'react'
import Getdata from "../components/GetData";
//import images1 from "../images/news5.jpg";

export default function Home() {
  return (
    <div className = "container1">  
    <div className= "home">
     {/* <div className="homepagetext"> 
    <h3>Info at ur finger clicks</h3> */}
     <div className="generalnews">
      <Getdata  props ="top"/> 
      </div> 
      </div>
      </div>
      // </div>
     
  )
}
