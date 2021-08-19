import NavBar from "./Navbar"


function Header({currentUser}){
    console.log(currentUser)
    return(
        <div>
              <NavBar />
              <p> {currentUser? <p>{currentUser.name}</p> : null } </p>
        </div>
    )
}
export default Header;