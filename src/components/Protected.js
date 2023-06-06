import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
import { Route,Redirect} from 'react-router-dom';

function Protected({children}) {
  let navigate=useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(children.type)
      // return(navigate('/'+ children.type));
      return children
    } else {
      return(navigate('/'))
    }
  });
  }
    
export default Protected
