import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";


const API_BASE_URL ='https://api.yelp.com/v3';


function BrandPage({currentBrand}){
    const[business,setBusiness]=useState([])
    const [events,setEvents]=useState([])

useEffect (()=>{
fetch(`http://localhost:3000/api?brand=${currentBrand.name.toLowerCase().split(" ").join("-")}&city=${currentBrand.city.toLowerCase().split(" ").join("-")}`)
.then(res=> res.json())
.then(data => setBusiness(data))
.catch(error => console.error('Error:',error))
},[])

useEffect (()=>{
fetch('http://localhost:3000/brand_events')
.then(res=> res.json())
.then(data => setEvents(data))
.catch(error => console.error('Error:',error))
},[])
    console.log(currentBrand)
    console.log(currentBrand.events)
    console.log(business)
    console.log (business.rating)
    console.log(business.hours)
    return(
    <div>
     <div>
         <h1>{currentBrand.name}</h1>
         <h2> {currentBrand.bio}</h2>
         <img src={currentBrand.image_url} width="500px"/>
     </div>
     <div>
        {business.phone}
        {/* {business.hours}
        {business.location} */}
        
         {business.rating} 
        {/* {business.hours.is_closed? yes : no} */}
      </div>
        <div>
            <h2> Events </h2>
            {currentBrand.events.map((event)=> <EventCard  event={event} />)}
        </div>

    </div>

    )
}
export default BrandPage;