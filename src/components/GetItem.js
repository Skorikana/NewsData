import React from 'react'

  const GetItem =({title,creator,image_url,pubDate,link,description,source_id}) =>{
  return (
    <div className= "container">
     <div className="card" style={{width: "18rem"}}>
     <span class="badge rounded-pill text-bg-success">Trending</span>
     {/* <img src={!image_url? "Not Available":image_url} className="card-img-top" alt= {image_url} /> */}
    
     <div className="card-body">  
    
     <h5>{title}</h5>
      {/* <p class="card-text">{description.slice(0, 100)}...</p>    */}
      {/* <p class="card-text">{description}...</p>    */}
     <p class="card-text">Sourced from:{source_id} </p>  
     <p class="card-text">Created by:{!creator? "Unknown" : creator}</p>  
     <p class="card-text"><small class="text-body-secondary">On: {pubDate} </small></p>
     <a href={link}  className="btn btn-primary">View more</a>
     </div>
     </div>
     </div> 
  )
}
export default GetItem