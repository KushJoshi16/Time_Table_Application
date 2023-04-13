import { signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import './SignIn.css';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate('/home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };
   
const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      };


return (
<section>
      <div class="form-box">
         <div class="form-value">
            <h2>Login</h2>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                 type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>  
            </div>
            <input class="loginButton" type="submit" id='login' name="login" value="Login" onClick={signIn} />
            <div class="register">
                <p>Don't have an account?</p>
                <input class="loginButton" type="submit" id='SignUp' name="SignUp" value="SignUp" onClick={signUp}/>
            </div>
    </div>
</div>
</section>
  );
};

export default SignIn;