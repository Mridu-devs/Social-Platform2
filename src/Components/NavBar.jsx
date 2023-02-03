import { Link, NavLink } from "react-router-dom";
import active from "../images/active.png"
import sleeping2 from "../images/sleeping2.png"
// import sleeping2 from './images/sleeping2.png'

// import sleeping2 from "..public/sleeping2.png"

function NavBar() {
    return ( 
    <div>
         <nav className='Navbar-main-container'>
                    <NavLink to="/profile" className='navlink'>Profile <img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /> </NavLink>
                    <NavLink to="/home" className='navlink'>Home<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink>
                    <NavLink to="/trending" className='navlink'>Trending<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink> 
                </nav>

    </div> 
    );
}

export default NavBar;