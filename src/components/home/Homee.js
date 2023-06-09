import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './home.css'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

function Homee() {
  let navigate=useNavigate();
  
  function logout(e){
    e.preventDefault();
    auth.signOut();
    console.log("user is logged out");
    navigate('/');
  }

    return (
        <header>
          <nav className='main-nav'>
            <div className='menu-link'>
            <ul>
             <Link className='link' to="/instructors"><li><button>Instructors</button></li></Link> 
             <Link className='link' to="/rooms"><li><button>Sections</button></li></Link> 
             {/* <Link className='link' to="/subjects"><li><button>Subjects</button></li></Link> 
             <Link className='link' to="/sections"><li><button>Sections</button></li></Link>  */}
             <Link className='link' to="/manager"><li><button>Scenario Manager</button></li></Link> 
            </ul>
            </div>
            <div>
            <button id="logout-btn" className='logoutButton'onClick={logout}>Logout</button>
            </div>
          </nav>
         <Outlet/>
        </header>
    )
}

export default Homee