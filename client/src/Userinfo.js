import React, {useState} from 'react';
import moment from 'moment';
import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";



function Userinfo({currentUser}){
    console.log(currentUser)
    const moment = require('moment');
    return(
        <div>
            
             <h1 className="MyProfile"> My Profile </h1>
             <div className="userinfodiv"> 
             <ul className="userInfoList">
                 <li className="userInfoList"> <p className="boldtext">Username:</p> {currentUser.username}</li>
                 <li className="userInfoList"> <p className="boldtext">Fullname:</p> {currentUser.first_name}  {currentUser.last_name}</li>
                 <li className="userInfoList"> <p className="boldtext">Birthday:</p>{moment(currentUser.birthday).format('MMM/D/YYYY')}</li>
                 </ul>
                 </div>
                 <p className ="EventSubtitle">Events:</p>
                 <Grid  clasName="Userinfogrid" >
                 {currentUser.events.map((event)=> <EventCard event={event}/>)}
                </Grid>
                
            

        </div>
    )
}


export default Userinfo;