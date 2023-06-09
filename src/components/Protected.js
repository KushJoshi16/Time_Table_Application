import React from 'react';
import { useNavigate } from 'react-router-dom';


function Protected({authUser,children}) {
  let navigate=useNavigate();
  if(!authUser){
    return(navigate('/'));
  }
  return children
  }
    
export default Protected
