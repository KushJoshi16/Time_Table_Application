import { signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
import React, { useState , useEffect} from "react";
import { auth } from "../../firebase";
import './Manager.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signed,setSigned]=useState(false);
    const [fileinput,setFileInput]=useState("");
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //    fetch('https://timetablegenerator.azurewebsites.net/get_time_table')
    //       .then((res) => res.json())
    //       .then((data) => {
    //          console.log(data);
    //          setPosts(data);
    //       })
    //       .catch((err) => {
    //          console.log(err.message);
    //       });
    // }, []);

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          setSigned(true);
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
            setSigned(true);
          })
          .catch((error) => {
            console.log(error);
          });
      };

function logout(e){
        e.preventDefault();
        setSigned(false);
        console.log("user is logged out");
        navigate('/rooms');
      }
console.log(setSigned)


  axios.get('https://timetablegenerator.azurewebsites.net/get_time_table')
  .then(resp => resp.json()) 
  .then( (response) => {
    console.log(response);
    this.setState({
      fetchUser: response.data
    });
  })
  .catch( (error) => {
    console.log(error);
  });  

console.log(fileinput);



return (
<>
<section>
      <div class="form-box">
         <div class="form-value">
            <h2>Admin Login</h2>
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
                <p>Don't have an admin account?</p>
                <input class="loginButton" type="submit" id='SignUp' name="SignUp" value="SignUp" onClick={signUp}/>
            </div>
            {!signed && <button className="adminButton" onClick={()=>navigate("/rooms")}>Finish</button>}
            {signed &&
            <div className="admin">
            <label className="csvLabel"for="file-input">Import From CSV</label>
             <input type="file" id="input" onChange={
              function(e)
              {
                setFileInput(e.target.files[0]);
                //posReq();
              }}>

              </input>
            </div>
            } 
            {signed && <button className='logout1Button' onClick={logout}>Logout</button> }           
    </div>
</div>
</section>
</>
  );
};

export default SignIn;