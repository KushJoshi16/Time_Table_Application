import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { Outlet } from 'react-router-dom'

const home = () => {
  return (
    <header>
      <nav className='main-nav'>
        <div className='menu-link'>
        <ul>
         <Link className='link' to="/instructors"><li><button>Instructors</button></li></Link> 
         <Link className='link' to="/rooms"><li><button>Rooms</button></li></Link> 
         <Link className='link' to="/subjects"><li><button>Subjects</button></li></Link> 
         <Link className='link' to="/sections"><li><button>Sections</button></li></Link> 
         <Link className='link' to="/manager"><li><button>Scenario Manager</button></li></Link> 
        </ul>
        </div>
      </nav>
     <Outlet/>
    </header>
  )
}

export default home