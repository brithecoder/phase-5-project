import './App.css';
import React, { useState, useEffect } from "react";
import env from "react-dotenv";
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
import Userinfo from './Userinfo';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    fetch(`${env.REACT_APP_API_URL || "/"}brands`,{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(data => setbrands(data))
    .catch(error => console.error('Error:',error))
  },[])
  useEffect (() => {
    fetch(`${env.REACT_APP_API_URL || "/"}users`,{
      method:'GET',
      headers: {
      'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(error => console.error('Error:',error))
  },[])


       const HandleBrandClickTwo = (brand) =>{
         console.log(brand)
          setCurrentBrand(brand)
       }


      //  useEffect(() => {
      //   fetch("/me",
      //   {
      //     credentials: "include",
      //     method: "GET"
      //   }).then((response) => {
      //     console.log(response)
      //     if (response.ok) {
      //       response.json().then((user) => setCurrentUser(user));
      //     }
      //   });
      // }, []);
    
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
    const handleNameClickTwo = (currentUser) => {
      console.log(currentUser)
    }
  
    
  return (
    <Container >
    <div className="App">
    {/* <div className="Container"> */}
    <Row>
      <Header currentUser={currentUser} onLogout={onLogout} handleNameClickTwo={handleNameClickTwo}/>
      </Row>
      <Switch>
        <Route  exact path="/">
            {/* <Header currentUser={currentUser}/> */}
          <Row>
            {/* <Col> */}
            <div className="logoPicture"> 
            </div>
            {/* </Col> */}
            </Row>
            <div>
              <Searchbar  style={{flex:"50%"}}  setFilterState={setFilterState}/>
              <BrandContainer brands={brands.filter(filterfunction)} HandleBrandClickTwo={HandleBrandClickTwo}/>
            </div>
        </Route> 
        <Route exact path="/explorepage">
           <ExplorePage brands={brands.sort(sortfunction)}  brands={brands} HandleBrandClickTwo={HandleBrandClickTwo}   currentBrand={currentBrand} currentUser={currentUser}/>
        </Route>
        <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser}/>
        </Route> 
        <Route  exact path="/login">
           <Login setCurrentUser={setCurrentUser}/>
        </Route> 
        <Route exact path="/brandpage">
            <BrandPage  currentBrand={currentBrand} currentUser={currentUser} />
        </Route>
          <Route exact path= "/userinfo">
           {currentUser ? <Userinfo currentUser={currentUser}  /> : <Userinfo /> }
            </Route>
      </Switch>
        {/* </div> */}
    </div>
    </Container>
  );
}

export default App;
