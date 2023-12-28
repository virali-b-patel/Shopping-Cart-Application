import React, { useEffect, useState } from 'react'
import '../../../Pages/CSS/BuyNow.css'

const LoginSignup = ({ isLogin, setIsLogin }) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // const [isLogin, setIsLogin] = useState(false);
  const [isValid, setIsValid] = useState(false);


  const onChangeLogin = () => {
    if (isLogin) {
      console.log('Login Logic');
    } else {
      localStorage.setItem('userData', JSON.stringify(state));
      setIsLogin(true)
    }
  };

  useEffect(() => {
    // Validation logic
    const isNameValid = state.name.length > 4;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
    const isPasswordValid = state.password.length >= 8;
    const isConfirmPasswordValid = state.confirmPassword === state.password;

    setIsValid(isEmailValid && isPasswordValid && isConfirmPasswordValid && isNameValid);
  }, [state]);


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
      <div className='loginsignup-agree'>
        <input type='checkbox' name='' id='' />
        <p>By continuing, I agree to the terms of use & privacy policy. </p>
      </div>
      <button style={{ cursor: isValid ? 'pointer' : 'not-allowed', background: isValid ? '#2874f0' : '#ff4141' }} disabled={!isValid} onClick={onChangeLogin}>
        Continue
      </button>
      <p className='loginsignup-login' onClick={() => setIsLogin(!isLogin)}>
        Already have an account? <span>{isLogin ? 'Sign Up' : 'Login'} here</span>
      </p>
    </div>
  )
}

export default LoginSignup