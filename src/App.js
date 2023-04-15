import SignIn from './components/auth/SignIn';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home.js';
import Instructors from './components/instructors/instructors';
import Rooms from './components/rooms/rooms';


function App() {
  const [authUser, setAuthUser] = useState(null);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/instructors" element={<Instructors/>}/> 
        <Route path="/rooms" element={<Rooms/>}/> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;