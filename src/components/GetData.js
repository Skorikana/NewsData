import {useEffect ,useState} from 'react';
import GetItem from "./GetItem";

export default function Getdata({props}){
    // const  key = "pub_214903577e90029cdb01aee6afa2f98b663f7" ;
    
     const [news, setNews] = useState([]);
  
     const getNews = async () => {    //fetchdata
       try{
    // const response = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=${props}&apiKey=${apiKey}`) //&page=2&pageSize=10`);
    
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_214903577e90029cdb01aee6afa2f98b663f7&q=${props}&country=us `)
    const result = await response.json();
    //console.log(result)
    console.log(result.results)
    setNews(result.results)        //we are setting the data fetched to be displayed on the page homescreen          
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
            //  description ={results.description} 
             author      ={results.creator}
             link         ={results.link}
             urlToImage  ={results.urlToImage}/>
              </div>
              </div>
              </div>
              )
         })}
      </div>
    )
}
  
