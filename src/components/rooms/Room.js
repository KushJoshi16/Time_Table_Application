import React, { useState , useEffect } from "react";
import Home from "../home/Homee";
import "./rooms.css";
import sections from "../data.json";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Room() {
  const [input, setInput] = useState();
  const [data, setData] = useState(null);
  const navigate=useNavigate();

  function InputSection() {
    let filtered;
    if(input)
    {
        // filtered = sections.sections?.filter(
        //     (section) => section?.sec === input 
        //   );
         filtered = data.sections[input]

         console.log(filtered)
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
                cell.textContent = filtered ? filtered[day][i - 8] : "";
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

  const generateData = async() => {
    try {
      const response = await fetch('https://timetablegenerator.azurewebsites.net/generate_time_table', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://timetablegenerator.azurewebsites.net/get_time_table');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
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
              autoComplete="off"
            ></input>
            <input type="submit" className="submitButton" onClick={InputSection} />
          </div>
        </div>
        {/* <div className="GenerateButton"><button onClick={generateData}>Generate Time Table</button></div> */}
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
        </tbody>
      </table>
      <div className="roomButtons">
        {/* <button className="roomButtons" onClick={()=>navigate("/manager")}>Finish</button> */}
        <button className="roomButtons" onClick={()=>navigate("/instructors")}>Cancel</button>
      </div>
    </>
  );
}

export default Room;
