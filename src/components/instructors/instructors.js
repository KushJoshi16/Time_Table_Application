import React from 'react'
import './instructors.css'
import Home from '../home/home'

const instructors = () => {
  return (
    <>
    <Home/>
    <div className='instructor'>
        <h4>Operations</h4>
        <center>
        <button className='insButton'>Add Instructor</button>
        <button className='insButton' for="file-input">Import From CSV</button>
        <input id="upload" type="file"></input>
        </center>
        <div className='instrOp'>
            <label htmlFor="">Available</label>
            <label htmlFor="">Name</label>
            <label htmlFor="">Hours</label>
            <label htmlFor="">Operation</label>
        </div>
    </div>
    </>
  )
}

export default instructors