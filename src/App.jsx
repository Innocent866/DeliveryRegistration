import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import LandingPage from './Pages/LandingPage';
import Navbar from './Layout/Navbar';
import ForgotPassword from './Pages/FogotPassword';
import ResetPassword from './Pages/ResetPassword';


const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
            <Routes>
            
            <Route path='/' element={<LandingPage/>}/>

            <Route path='/forgotpassword' element={<ForgotPassword/>}/>

            <Route path='/password/:resetToken' element={<ResetPassword/>}/>

              <Route path="/Register" element={<Register />} />

              <Route path="/Login" element={<Login />} />

            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App