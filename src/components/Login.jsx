import React, {useState } from 'react'
import InputControl from "./ImportControl"
import { Link, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword}  from 'firebase/auth'
import {auth } from "../firebase"

const Login = () => {


  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    setsubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setsubmitButtonDisabled(false)
        
        navigate("/");
      }
      ).catch(err => {
        setsubmitButtonDisabled(false)
        setErrorMsg(err.message);
      });
  }


  return (
    <div className='container'>
      <div className="innerBox">
        <h1 className="heading">Login</h1>
        <InputControl label="Email" placeholder="Enter email ID" 
        onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}/>

        <InputControl label="Password" placeholder="Enter your password" 
        onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}/>
        <div className="footer">
          <b className='error' >{errorMsg}</b>
          <b className='error'>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmit}>login</button>
          <p>
            Already have an account ?{" "}
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
