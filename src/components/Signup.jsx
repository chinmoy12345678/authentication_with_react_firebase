import React, {useState } from 'react'
import InputControl from "./ImportControl"
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile}  from 'firebase/auth'
import {auth } from "../firebase"

const Signup = () => {
  const navigate = useNavigate();
    const [values , setValues] = useState({
        name: "",
        email: "",
        pass: ""
    })
    const [errorMsg , setErrorMsg] = useState("")
    const[submitButtonDisabled , setsubmitButtonDisabled] = useState(false)
    const handleSubmit =()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all the fields");
            return;
        }
        setErrorMsg("");

        setsubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res)=>{
          setsubmitButtonDisabled(false)
          const user = res.user
          await updateProfile(user,{
            displayName: values.name
          })
          navigate('/')
        }
        ).catch(err => {
          setsubmitButtonDisabled(false)
          setErrorMsg(err.message);
        });
    }
  return (
    <div className='container'>
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
        <InputControl label="Name" placeholder="Enter your name" 
        onChange={event=>setValues(prev=>({...prev,name:event.target.value}))}/>
        <InputControl label="Email" placeholder="Enter email ID" 
        onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}/>
        <InputControl label="Password" placeholder="Enter password" 
        onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}/>
        <div className="footer">
          <b className='error'>{errorMsg}</b>
          <button onClick={handleSubmit} disabled={submitButtonDisabled}>
            signup</button>
          <p>
            Already have an account ?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
