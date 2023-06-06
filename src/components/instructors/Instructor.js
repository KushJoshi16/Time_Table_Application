import React from 'react'
import './instructors.css'
import Home from '../home/Homee'
import groups from "../output1.json" 

function Instructor() {
    let instructor,filtered,tags;

    function search(e){
    instructor=e.target.value;
    console.log(instructor);
    filtered=groups.groups.filter(group=>group.Professor===instructor);
    console.log(filtered);
    var target=document.getElementsByClassName('instrOp');
    const teachersBody = document.getElementById("teachersBody");
  
      // Generate table rows and cells dynamically
      for(let i=0;i<filtered.length;i++){
        const row = document.createElement("tr");
        const teacherCell = document.createElement("td");
        teacherCell.textContent = filtered[i].Professor;
        row.appendChild(teacherCell);
  
        const subjectsCell = document.createElement("td");
        subjectsCell.textContent = filtered[i].Subject;
        row.appendChild(subjectsCell);
  
        teachersBody.appendChild(row);
      };
    }
    return (
      <>
      <Home/>
      <div className='instructor'>
          <h4>Operations</h4>
          <center>
          {/* <button className='insButton'>Add Instructor</button>
          <button className='insButton' for="file-input">Import From CSV</button>
          <input id="upload" type="file"></input> */}
          <label htmlFor="" className='search' >Search Instructors</label>
          <input type="text" onChange={search}></input>
          </center>
          <div className='instrOp'>
              {/* <label htmlFor="">Available</label>
              <label htmlFor="">Name</label>
              <label htmlFor="">Hours</label>
              <label htmlFor="">Operation</label> */}
               <table id="teachersTable">
                <thead>
                  <tr>
                    <th>Teacher</th>
                    <th>Subject Assigned</th>
                  </tr>
                </thead>
                <tbody id="teachersBody">
                </tbody>
                </table>
          </div>
      </div>
      </>
    )
}

export default Instructor