import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'; 


function Navbar({currentUser,onLogout,handleNameClickTwo}){
   console.log(currentUser)
    
   
   const history = useHistory();
 
   function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      onLogout()
      history.push('/')
    });
  }
  const handleNameClick = (currentUser) => {
       handleNameClickTwo(currentUser);
  }

   return(
    <div>
        <div className="header">
        <NavLink to ='/'className ="TextLine">
        <h2 className="title"> Ninalem</h2>
        </NavLink>
        <br></br>
        <NavLink to ="/Userinfo">
        {currentUser? <button className="UserWelcome buttonCss" onClick={() => handleNameClick(currentUser)}> Hello, {currentUser.username}</button> : null } 
        </NavLink>
        <NavLink to='/ExplorePage'>
        <button className="buttonCss">Explore</button>
        </NavLink>
        {currentUser? 
        <button className="buttonCss" onClick={handleLogout}>Log out</button>
        :
        <div>
        <NavLink to='/Signup'>
        <button className="buttonCss"> Sign Up </button>
        </NavLink>
         <NavLink to='/Login'>
         <button className="buttonCss"> Log in </button>
         </NavLink>
         </div>
         }



     </div> 
    </div>
        
   );
}
export default Navbar;