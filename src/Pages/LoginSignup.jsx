import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {

  const location = useLocation()
  const navigate = useNavigate();

  const onChangeRoute = () => {
    if (location.pathname === "/login") {
      navigate("/signup")
    } else if (location.pathname === "/signup") {
      navigate("/login")
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{location.pathname === "/login" ? "Login" : "Sign Up"}</h1>
        <div className='loginsignup-fields'>
          {location.pathname === "/signup" && <input type='text' placeholder='Your Name' />}
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
        <button onClick={() => navigate("/")}>Continue</button>
        <p className='loginsignup-login' onClick={onChangeRoute}>Already have an account?  <span>{location.pathname === "/login" ? "Sign Up" : "Login"} here</span></p>
      </div>
    </div>
  )
}

export default LoginSignup
