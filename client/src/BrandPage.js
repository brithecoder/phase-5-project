import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid"
import EventCard from "./EventCard";
import YelpPictureContainer from "./YelpPictureContainer";


const API_BASE_URL ='https://api.yelp.com/v3';


function BrandPage({currentBrand,handleEventClickTwo,currentUser}){
    const[business,setBusiness]=useState([])
    const [events,setEvents]=useState([])

useEffect (()=>{
fetch(`http://localhost:3000/api?brand=${currentBrand.name.toLowerCase().split(" ").join("-")}&city=${currentBrand.city.toLowerCase().split(" ").join("-")}`)
.then(res=> res.json())
.then(data => setBusiness(data))
.catch(error => setBusiness(false))
},[])

useEffect (()=>{
fetch('http://localhost:3000/brand_events')
.then(res=> res.json())
.then(data => setEvents(data))
.catch(error => console.error('Error:',error))
},[])
    console.log(business)
    return(
<div className="brandpage" style={{backgroundImage:"src={business.image_url}"}}>
     <div>
         <h1 className="brandpageTitle">{currentBrand.name}</h1>
         <h2> {currentBrand.bio}</h2>
         <img src={currentBrand.image_url} width="500px"/>
     </div>
     {business.id ?
     <div className="Yelp">
         <h3 className="YelpTitle">Yelp Info</h3>
         <ul className="yelpList">
        <li> Phone Number: {business.phone}</li>
        {/* {business.hours}
        {business.location} */}
        {business.categories?business.categories.map((category)=> <li>{category.alias}</li>):null}
        <li> Rating: {business.rating}/5 </li>
        <li>Price: {business.price}</li>
        </ul>
        {business.photos ? <YelpPictureContainer business={business} key={business.id} /> :null}
          {/* <div>
              <ul className="yelpPictureList">
        {business.photos? business.photos.map((photo)=> <li className="yelpPictureList"><img src={photo} width="150px"/></li>):null}
        </ul>
        </div> */}
    </div>
    : null}
    <div>
        <div className="EventsonBrandpage">
        <h2 className="eventsTitle"> Events </h2>
            <Grid container spacing={4}>
            {/* <Grid> */}
            {currentBrand.events.map((event)=> <EventCard  currentBrand={currentBrand} event={event} handleEventClickTwo={handleEventClickTwo} currentUser={currentUser}/>)} 
            {/* </Grid> */}
            </Grid>
        </div>
        </div>

 </div>

    )
}
export default BrandPage;