import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import {auth} from './firebase'

import "./styles/Login.css"
import "./styles/ImportControl.css"
import "./styles/Signup.css"

function App() {
  const [userName , setUserName] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }
      else setUserName("");
    })
  }, [])
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
