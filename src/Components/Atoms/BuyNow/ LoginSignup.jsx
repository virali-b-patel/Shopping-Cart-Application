import React from 'react'
import '../../../Pages/CSS/BuyNow.css'
import { useLocation, useNavigate } from 'react-router-dom'


const LoginSignup = ({ setLoginButton }) => {

  const location = useLocation()
  const navigate = useNavigate()

  const onChangeRoute = () => {
    if (location.pathname === "/buy") {
      navigate("/login")
    }
  }

  return (
    <div className='loginsignup-container' style={{ position: "relative", padding: "0", boxShadow: "none", background: "none", border: "none" }}>
      <h1>{location.pathname === "/buy" ? "Sign Up" : "Login"}</h1>
      <div className='loginsignup-fields'>
        {location.pathname === "/signup" && <input type='text' placeholder='Your Name' />}
        <input type='email' placeholder='Email Address' />
        <input type='password' placeholder='Password' />
        <input type='number' placeholder='Mobile Number' />
      </div>
      <div className='loginsignup-agree'>
        <input type='checkbox' name='' id='' />
        <p>By continuing, i agree to the terms of use & privacy policy. </p>
      </div>
      <button onClick={() => setLoginButton()}>Continue</button>
      <p className='loginsignup-login' onClick={onChangeRoute}>Already have an account?  <span>{location.pathname === "/buy" ? "Login" : "Sign Up"} here</span></p>
    </div>
  )
}

export default LoginSignup