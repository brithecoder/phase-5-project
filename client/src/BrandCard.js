import React,{useEffect,useState} from "react";
import env from "react-dotenv";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { NavLink, useHistory } from 'react-router-dom';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
 
  
function BrandCard({brand,HandleBrandClickTwo}){
      const[like,setLikes]=useState(brand.likes)
      console.log(brand.likes)
    function likefunction(likes){
        fetch(`${env.API_URL}/brands/${brand.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            }})
            setLikes(brand.likes++)
    }
    const handleLikeClick = () => {
       console.log(brand.likes)
       brand.likes++
       setLikes(brand.likes)
    }
    const handleBrandPageClick = (brand) => {
        console.log(brand)
        HandleBrandClickTwo(brand);
    }

    const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};
    return(
        <div className="cardContainer"  style={{flex:"50%"}}>
             <Card className={classes.root}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } 
        title={brand.name}
        subheader= {brand.city +"," +brand.state}
      />
      <CardMedia
        className={classes.media}
        image={brand.image_url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {brand.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>handleLikeClick(like)}>
            {brand.likes}
          <FavoriteIcon />
           
        </IconButton >
        <NavLink to="/brandpage">
        <IconButton aria-label="share" onClick={()=>handleBrandPageClick(brand)}>
          <ShareIcon />
        </IconButton>
          </NavLink>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    <br></br>
        </div>
    )
}
export default BrandCard;