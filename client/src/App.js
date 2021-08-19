import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';
import BrandContainer from './BrandContainer';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Searchbar from './Searchbar';
import BrandPage from './BrandPage';
import ExplorePage from './ExplorePage';
import { NavLink, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";



function App() {
  const [brands,setbrands]=useState([])
  const [currentBrand,setCurrentBrand]=useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect (() => {
    fetch('http://localhost:3000/brands')
    .then(res => res.json())
    .then(data => setbrands(data))
    .catch(error => console.error('Error:',error))
  },[])
       const HandleBrandClickTwo = (brand) =>{
         console.log(brand)
          setCurrentBrand(brand)
       }
  return (
    <div className="App">
    <div className="Container">
      <Header currentUser={currentUser}/>
      <Switch>
         <Route  exact path="/">
          {/* <Header currentUser={currentUser}/> */}
           <div className="logoPicture"> Where People Connect</div>
          <Searchbar />
          <BrandContainer brands={brands}  HandleBrandClickTwo={HandleBrandClickTwo}/>
          </Route> 
         <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
          </Route> 
          <Route  exact path="/login">
          <Login setCurrentUser={setCurrentUser}/>
          </Route> 
          <Route exact path="/brandpage">
            <BrandPage  currentBrand={currentBrand} />
            </Route>
             </Switch>
        </div>
    </div>
  );
}

export default App;
