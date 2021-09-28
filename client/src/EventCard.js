import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import env from "react-dotenv";
import moment from 'moment'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});




function EventCard({event,handleEventClickTwo,currentBrand,currentUser}){
  const [eventClick,setHandleEvent]=useState(false)
  const classes = useStyles();
    console.log(event)
  
     async function handleAddEvent(e){
      e.preventDefault();
      const user_event = {
          user_id: currentUser.id,
          event_id: event.id
      }
      const res = await fetch(`${env.REACT_APP_API_URL}/user_events`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user_event)
      });
       
    }
    const handleEventClick = () =>{
      return setHandleEvent === true
    }
  
  const moment = require('moment');
  let date = (moment(event.date))
  let eventdate =(date._d)

    return(
        <Grid className="eventGrid">
         <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={event.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {event.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {moment(eventdate).format('MMM D YYYY')}
           {/* {event.date} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          {event.joins} others attending
        </Button>
      {currentUser ? <Button size="small" color="primary" onClick={handleAddEvent} OnClick={handleEventClick}>
          {eventClick ? "Unjoin": "Join"}
        </Button> :null }
      </CardActions>
    </Card>
         </Grid>
    )
}
export default EventCard;