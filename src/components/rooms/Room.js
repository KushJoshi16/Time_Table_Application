import React, { useState } from "react";
import Home from "../home/Homee";
import "./rooms.css";
import sections from "../data.json";
import { useNavigate } from "react-router-dom";

function Room() {
  const [input, setInput] = useState();
  const navigate=useNavigate();

  function InputSection() {
    let filtered;
    if(input)
    {
        filtered = sections.sections?.filter(
            (section) => section?.sec === input 
          );

          if(filtered)
          {
            const table = document.getElementById("scheduleTable");
      
            var rowCount = table.rows.length;
            for (var x = rowCount - 1; x > 0; x--) {
              table.deleteRow(x);
            }
        
            for (let i = 8; i < 17; i++) {
              const row = document.createElement("tr");
              const periodCell = document.createElement("td");
              periodCell.textContent = `${i}:00 - ${i + 1}:00`;
              row.appendChild(periodCell);
        
              for (const day of [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
              ]) {
                const cell = document.createElement("td");
                cell.textContent = filtered ? filtered[0][day][i - 8] : "";
                row.appendChild(cell);
              }
              table.appendChild(row);
            }
          

          }
         
          else
          {
            alert("Section doesn't exist!");
          }
    }

    else{
       alert("Please enter a valid section!");
    }

   }

  console.log(input);
  return (
    <>
      <Home />
      <center>
        <h3>Rooms</h3>
      </center>
      <div className="container">
        <div className="textButtons">
          <div className="inputClass">
            <input
              type="text"
              placeholder="Section"
              id="data"
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <input type="submit" className="submitButton" onClick={InputSection} />
          </div>
        </div>
        <div className="radioButtons">
          <label htmlFor="">Type:</label>
          <label htmlFor="">Lecture</label>
          <input type="radio" value="" />
          <label htmlFor="">Laboratory</label>
          <input type="radio" value="" />
        </div>
      </div>
      <table id="scheduleTable">
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
        <tbody id="data-output">
          {/* <tr>
      <td>8:00 - 9:00 AM</td>
     <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr id="2ndR">
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
    </tr> */}
        </tbody>
      </table>
      <div className="roomButtons">
        <button className="roomButtons" onClick={()=>navigate("/subjects")}>Finish</button>
        <button className="cancel roomButtons" onClick={()=>navigate("/instructors")}>Cancel</button>
      </div>
    </>
  );
}

export default Room;
