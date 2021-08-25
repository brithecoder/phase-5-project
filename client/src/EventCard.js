import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import moment from 'moment'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});




function EventCard({event,handleEventClickTwo,currentBrand}){
  const classes = useStyles();
    // console.log(event)
  const handleEventClick = (event) => {
    console.log(event)
     handleEventClickTwo(event)
     }


    //  async function handleAddEvent(e){
    //   e.preventDefault();
    //   const user_event = {
    //       user_id: 1,
    //       event_id: 1
    //   }
    //   const res = await fetch(`/user_events`, {
    //       method: "POST",
    //       headers: {
    //           "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(user_event)
    //   });


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
        <Button size="small" color="primary" onClick={()=>handleEventClick()}>
          Join
        </Button>
      </CardActions>
    </Card>
         </Grid>
    )
}
export default EventCard;