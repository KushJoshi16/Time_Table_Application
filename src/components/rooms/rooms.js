import React from 'react'
import Home from '../home/home'
import './rooms.css';

const rooms = () => {
  return (
    <>
    <Home/>
    <center>
    <h3>Rooms</h3>
    </center>
    <div className='container'>
    <div className='textButtons'>
        <div className='labels' ><label className="textLabel"htmlFor="">Name</label></div>
        <div><input type="text" value="" /></div>
    </div>
    <div className='radioButtons'>
        <label htmlFor="">Type:</label>
        <label htmlFor="">Lecture</label>
        <input type="radio" value="" />
        <label htmlFor="">Laboratory</label>
        <input type="radio" value=""/>
    </div>
    </div>
    <table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>8:00 - 9:00 AM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9:00 - 10:00 AM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10:00 - 11:00 AM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11:00 - 12:00 PM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>12:00 - 1:00 PM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>1:00 - 2:00 PM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2:00 - 3:00 PM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3:00 - 4:00 PM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4:00 - 5:00 PM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
<div className='roomButtons'>
<button className='roomButtons'>Finish</button>
<button className='cancel roomButtons'>Cancel</button>
</div>
    </>
  )
}

export default rooms