import React from 'react'
import Getdata from "../components/GetData";
//import images1 from "../images/news5.jpg";

export default function Home() {
  return (
    <div className = "container1">  
    <div className= "home">
    {/* <div className="homepagetext"> */}
     <div className="generalnews">
    
     <Getdata  props ="general"/>
     
      </div> 
      </div>
      </div>
     
  )
}
