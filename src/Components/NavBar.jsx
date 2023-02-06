import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import active from "../images/active.png"
import sleeping2 from "../images/sleeping2.png"


function NavBar() {
    const loginId=useContext(UserContext)
    console.log("NavBar",loginId)
    const id = localStorage.getItem("loginid")
    console.log("navbarid",id)

    function logout(){
        localStorage.clear()
        loginId.setLogIn(null)
    }

    return ( 
    <div>
        <nav className='Navbar-main-container'> 
        {(loginId.login!=null)?(  
            <>  
          <NavLink to="/profile" className='navlink'>Profile <img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /> </NavLink>
           <NavLink to="/home" className='navlink'>Home<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink>
           <NavLink to="/trending" className='navlink'>Trending<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink> 
            <NavLink to="/userslist" className='navlink'>Users List<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink> 
            <NavLink to="/" onClick={logout} className='navlink'>Log Out<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink>
            </>):
            ( "LOGIN")}
            </nav>
    </div>
            )}


export default NavBar;