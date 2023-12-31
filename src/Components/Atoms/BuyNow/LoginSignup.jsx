import React, { useEffect, useState } from 'react'
import '../../../Pages/CSS/BuyNow.css'

const LoginSignup = ({ isLogin, setIsLogin, onChangeLogin }) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false
  })

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validation logic
    if (isLogin) {
      const isPasswordValid = state.password.length >= 8;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      setIsValid(isEmailValid, isPasswordValid)
    } else {
      const isNameValid = state.name.length > 4;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      const isPasswordValid = state.password.length >= 8;
      const isConfirmPasswordValid = state.confirmPassword === state.password;
      const isCheckBox = state.checkbox
      setIsValid(isEmailValid && isPasswordValid && isConfirmPasswordValid && isNameValid && isCheckBox);
    }
  }, [state]);

  const onBtnClick = () => {
    if (isLogin) {
      onChangeLogin(state.email, state.password)
    } else {
      onChangeLogin(state)
    }
  }


  return (
    <div className='loginsignup-container' style={{ position: 'relative', padding: '0', boxShadow: 'none', background: 'none', border: 'none' }}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <div className='loginsignup-fields'>
        {!isLogin && <>
          <input type='text' placeholder='Enter Your Name' value={state.name} name='name' onChange={(e) => setState({ ...state, name: e.target.value })} />
          <input type='email' placeholder='Enter Email Address' value={state.email} name='email' onChange={(e) => setState({ ...state, email: e.target.value })} />
          <input type='password' placeholder='Enter Password' value={state.password} name='password' onChange={(e) => setState({ ...state, password: e.target.value })} />
          <input type='password' placeholder='Repeat Above Password' value={state.confirmPassword} name='confirmPassword' onChange={(e) => setState({ ...state, confirmPassword: e.target.value })} />
        </>}
        {isLogin && <>
          <input type='email' placeholder='Enter Email Address' value={state.email} name='email' onChange={(e) => setState({ ...state, email: e.target.value })} />
          <input type='password' placeholder='Enter Password' value={state.password} name='password' onChange={(e) => setState({ ...state, password: e.target.value })} />
        </>}
      </div>
      {!isLogin && <><div className='loginsignup-agree'>
        <input type='checkbox' style={{ cursor: "pointer" }} value={state.checkbox} name='' id='' onClick={() => setState({ ...state, checkbox: true })} />
        <p>By continuing, I agree to the terms of use & privacy policy. </p>
      </div></>}
      <button style={{ cursor: isValid ? 'pointer' : 'not-allowed', background: isValid ? '#2874f0' : '#ff4141' }} disabled={!isValid} onClick={() => onBtnClick(state)}>
        Continue
      </button>
      <p className='loginsignup-login' onClick={() => setIsLogin(!isLogin)}>
        Already have an account? <span>{isLogin ? 'Sign Up' : 'Login'} here</span>
      </p>
    </div>
  )
}

export default LoginSignup