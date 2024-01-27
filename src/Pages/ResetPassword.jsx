import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link,useParams,useNavigate } from "react-router-dom";
import axios from 'axios';


const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/admin/resetpassword/${resetToken}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(data.message);
        navigate('/LogIn');
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <main className="container vh-50 d-flex flex-column  my-3  ">
        <div className="">
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            Reset Password
          </h2>
          {error && <span>{error} </span>}
          {success && <span> {success} </span>}
          <p className="text-center">Let's help you recover your password</p>

          <Form className="w-75 m-auto" onSubmit={resetPasswordHandler}>
            <Form.Label className=" fs-6 text-secondary ">Password </Form.Label>

            <FloatingLabel
              controlId="floatingInput"
              label="example@mail.com"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="name@example.com"
                className="border border-3 rounded"
                value={password}
                required
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FloatingLabel>
            <Form.Label className=" fs-6 text-secondary "> Confirm Password </Form.Label>

            <FloatingLabel
              controlId="floatingInput"
              label="example@mail.com"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="name@example.com"
                className="border border-3 rounded"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </FloatingLabel>
            {error && <span className="text-danger fst-italic">{error} </span>}

            
            <div className='text-center'>
                <button className="btn btn-success px-5 py-2 text-white my-3">Reset Password</button>
                </div>          
          </Form>
        </div>
      </main>
    
    </>
  )
}

export default ResetPassword