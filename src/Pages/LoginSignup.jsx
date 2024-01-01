import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {

  const location = useLocation()
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false
  })

  const [isLogin, setIsLogin] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      const isPasswordValid = state.password.length >= 8;
      const isCheckBox = state.checkbox

      setIsValid(isEmailValid && isPasswordValid && isCheckBox);

    } else if (location.pathname === '/signup') {
      const isNameValid = state.name.length > 4;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      const isPasswordValid = state.password.length >= 8;
      const isConfirmPasswordValid = state.confirmPassword === state.password;
      const isCheckBox = state.checkbox

      setIsValid(isEmailValid && isPasswordValid && isConfirmPasswordValid && isNameValid && isCheckBox);
    }
  }, [state]);

  const onChangeRoute = () => {
    if (location.pathname === "/login") {
      navigate("/signup")
    } else if (location.pathname === "/signup") {
      navigate("/login")
    }
  }

  const onChangeLogin = () => {
    if (location.pathname === "/login") {
      console.log('Login Logic');
      navigate('/')
    } else {
      localStorage.setItem('userData', JSON.stringify(state));
      setIsLogin(true)
      navigate("/login")
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{location.pathname === '/signup' || isLogin ? 'Sign Up' : 'Login'}</h1>
        <div className='loginsignup-fields'>

          {location.pathname === "/signup" && <> <input type='text' placeholder='Your Name' value={state.name} name='name' onChange={(e) => setState({ ...state, name: e.target.value })} />
            <input type='email' placeholder='Email Address' value={state.email} name='email' onChange={(e) => setState({ ...state, email: e.target.value })} />
            <input type='password' placeholder='Password' value={state.password} name='password' onChange={(e) => setState({ ...state, password: e.target.value })} />
            <input type='password' placeholder='Repeat Above Password' value={state.confirmPassword} name='confirmPassword' onChange={(e) => setState({ ...state, confirmPassword: e.target.value })} />

          </>}
          {location.pathname === "/login" && <>
            <input type='email' placeholder='Enter Email Address' value={state.email} name='email' onChange={(e) => setState({ ...state, email: e.target.value })} />
            <input type='password' placeholder='Enter Password' value={state.password} name='password' onChange={(e) => setState({ ...state, password: e.target.value })} />
          </>}
        </div>

        {!isLogin && <> <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' style={{ cursor: "pointer" }} value={state.checkbox} onClick={() => setState({ ...state, checkbox: true })} />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div></>}
        <button style={{ cursor: isValid ? 'pointer' : 'not-allowed', background: isValid ? '#2874f0' : '#ff4141' }} disabled={!isValid} onClick={onChangeLogin}>Continue</button>
        <p className='loginsignup-login' onClick={onChangeRoute}>Already have an account?  <span>{location.pathname === "/login" ? "Sign Up" : "Login"} here</span></p>
      </div>
    </div >
  )
}

export default LoginSignup
