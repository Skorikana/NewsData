import React from 'react'

  const GetItem =({title,creator,pubDate,link,source_id}) =>{
  return (
    <div className= "container">
     <div className="card" style={{width: "18rem"}}>
     <span className="position-absolute top-0 start-80 translate middle badge rounded-pill text-bg-success" style={{left:"80%", zIndex:"1"}}>Trending</span>
     {/* <img src={!image_url? "Not Available":image_url} className="card-img-top" alt= {image_url} /> */}
    
     <div className="card-body">  
    
     <h5>{title}</h5>
     <p className="card-text">Sourced from:{source_id} </p>  
     <p className="card-text">Created by:{!creator? "Unknown" : creator}</p>  
     <p className="card-text"><small class="text-body-secondary">On: {pubDate} </small></p>
     <a href={link}  className="btn btn-primary">View more</a>
     </div>
     </div>
     </div> 
  )
}
export default GetItem