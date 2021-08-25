import NavBar from "./Navbar"


function Header({currentUser,onLogout,handleNameClickTwo}){
    console.log(currentUser)
    return(
        <div>
              <NavBar currentUser={currentUser} onLogout={onLogout} handleNameClickTwo={handleNameClickTwo}/>
        </div>
    )
}
export default Header;