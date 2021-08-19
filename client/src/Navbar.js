import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'; 


function Navbar(){


   return(
    <div>
        <div className="header">
        <NavLink to ='/'>
        <h2 className="title"> Ninalem</h2>
        </NavLink>
        <br></br>
        <NavLink to='/ExplorePage'>
        <button className="buttonCss">Explore</button>
        </NavLink>
        <NavLink to='/Signup'>
        <button className="buttonCss"> Sign Up </button>
        </NavLink>
         <NavLink to='/Login'>
         <button className="buttonCss"> Log in </button>
         </NavLink>

     </div> 
    </div>
   );
}
export default Navbar;