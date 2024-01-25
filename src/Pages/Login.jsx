import React, { useContext, useState } from 'react'
// import logo from '../assets/Navlogo.jpg'
import { Link } from 'react-router-dom'
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import CartContext from '../context/CartContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyPassword, setCompanyPassWord] = useState('');

  const navigate = useNavigate()
  // localStorage.setItem('done','doings')


  async function login(e) {
    e.preventDefault()

    const regData ={
      email,
      password,
      companyPassword
    }

    try {
      const response = await fetch("https://swifdropp.onrender.com/api/v1/login-admin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(regData),
      });
      const responseData = await response.json();
    console.log(responseData);
    if (responseData.token) {
      localStorage.setItem('token', responseData.token)
      navigate('/AllUsers')
       }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center '>
           <div className=''>
          
          
           <h3>Welcome Back</h3>
           <p>SwifDrop gives you the blocks and components you need to take your sales to the next level.</p>
          
           <div className='mt-5'>
            <form >
                <label htmlFor="" className='my-2'>Email:</label>
                <input type="text" className='w-100 rounded p-3 ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="" className='my-2'>Password:</label>
                <input type="password" className='w-100 rounded p-3 ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="" className='my-2'>Company:</label>
                <input type="text" className='w-100 rounded p-3 ' value={companyPassword} onChange={(e)=>setCompanyPassWord(e.target.value)}/>
                <div className='d-flex justify-content-between my-4'>
                   <div>
                   <input type="checkbox" /> <label htmlFor="">Remember me</label>
                   </div>
                   <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>
                <div className='text-center'>
                <button className="btn btn-success px-5 py-2 text-white my-3" onClick={login}>LogIn</button>
                </div>
            </form>
           <div className="text-center d-flex justify-content-between  justify-content-lg-center ">
           <h5>Don't have an account?</h5>
            <Link to='/Register'><h5>Create free account</h5></Link>
           </div>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Login