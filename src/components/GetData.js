import {useEffect ,useState} from 'react';
import GetItem from "./GetItem";

export default function Getdata({props}){
    const key =process.env.REACT_APP_APIKEY ;
    
     const [news, setNews] = useState([]);
  
     const getNews = async () => {    //fetchdata
       try{  
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${key}&q=${props}&country=us `)
    const data = await response.json();
    console.log(data.results)
    setNews(data.results)        //we are setting the data fetched to be displayed on the page homescreen          
      }
   catch(e){
    console.error(e)
   }}
    useEffect(() => {
    getNews();
       }, [props]);
    return(
      <div className ="newsdisplay">
        {news.map(results => {
          return (
              <div className = "container my-5">
              <div className ="row text-center">
                <div className ="col">
             <GetItem
             title       ={results.title}
             pubDate     ={results.pubDate}
             link        ={results.link}
             source_id   ={results.source_id}
             creator     ={results.creator}/>
              </div>
              </div>
              </div>
              )
         })}
      </div>
    )
}
  
