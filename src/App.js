import SignIn from './components/auth/SignIn';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Homee';
import Instructor from './components/instructors/Instructor';
import Room from './components/rooms/Room';
import { Navigate } from 'react-router-dom';
import Protected from './components/Protected';


function App() {
  const [authUser, setAuthUser] = useState(false);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(null);
      }
    });
console.log(authUser)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={
        <SignIn/>
        }/>
        <Route path="/home" element={
        <Protected>
        <Home/>
        </Protected>}/>
        <Route path="/instructors" element={<Instructor/>}/> 
        <Route path="/rooms" element={<Room/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;