import {Route, Routes, Link } from "react-router-dom"
import "./App.css";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import './Signup.css';


export default function App(){
  return(
    <div>
      <h2 id="mainfont1">Hello Everyone !!!</h2>
      <h2 id="mainfont2">This is my Dashboard & Signup page !!!</h2>
      <Link to='/' id="dashboard"><button id="dashboard2">Dashboard</button></Link> 
      <Link to="/Signup" id="signup"><button id="signup2">Signup</button></Link>
      <Routes>
        <Route path= '/' element={<Dashboard/>}/>
        <Route path= '/Signup' element={<Signup/>}/>
      </Routes>

    </div>
  )
}

