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
import EventModal from './EventModal'
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";



function App() {
  const [brands,setbrands]=useState([])
  const [currentBrand,setCurrentBrand]=useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [user, setUser] = useState(null);
  const [filterState,setFilterState]=useState("")


  useEffect (() => {
    fetch('http://localhost:3000/brands')
    .then(res => res.json())
    .then(data => setbrands(data))
    .catch(error => console.error('Error:',error))
  },[])
  useEffect (() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(error => console.error('Error:',error))
  },[])


       const HandleBrandClickTwo = (brand) =>{
         console.log(brand)
          setCurrentBrand(brand)
       }


       useEffect(() => {
        fetch("/me",
        {
          credentials: "include",
          method: "GET"
        }).then((response) => {
          if (response.ok) {
            response.json().then((user) => setCurrentUser(user));
          }
        });
      }, []);
    
    console.log(filterState)
    const filterfunction = (brand) =>{
      if (filterState === ""){
         return true
        }
      return  brand.state === filterState   
    }
    const sortfunction = (brandA,brandB) => {
         return brandB.likes - brandA.likes
    }

    function onLogout() {
      setCurrentUser(null);
    }
    const handleNameClickTwo = ()=>{
         if (currentUser.username === user.username)
         return true
    }
    console.log(user)


    const handleEventClickTwo = (event)=> {
      console.log(event)
       console.log(currentUser)

      //  <div>
      // <EventModal /> 
      // </div>
    }

    
  return (
    <div className="App">
    {/* <div className="Container"> */}
      <Header currentUser={currentUser} onLogout={onLogout} handleNameClickTwo={handleNameClickTwo}/>
      <Switch>
        <Route  exact path="/">
            {/* <Header currentUser={currentUser}/> */}
          
            <div className="logoPicture"> 
              <h4 className="WPC"> Where People Connect</h4>
            </div>
            <div>
              <Searchbar  style={{flex:"50%"}}  setFilterState={setFilterState}/>
              <BrandContainer brands={brands.filter(filterfunction)} HandleBrandClickTwo={HandleBrandClickTwo}/>
            </div>
        </Route> 
        <Route exact path="/explorepage">
           <BrandContainer brands={brands.sort(sortfunction)} HandleBrandClickTwo={HandleBrandClickTwo}/>
        </Route>
        <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser}/>
        </Route> 
        <Route  exact path="/login">
           <Login setCurrentUser={setCurrentUser}/>
        </Route> 
        <Route exact path="/brandpage">
            <BrandPage  currentBrand={currentBrand} handleEventClickTwo={handleEventClickTwo} />
        </Route>
            
      </Switch>
        {/* </div> */}
    </div>
  );
}

export default App;
