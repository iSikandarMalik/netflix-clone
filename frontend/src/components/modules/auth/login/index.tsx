import React from 'react'
import './style.scss'

const Login = () => {
  return (
    <div className="login__main">
      <div className="top">
        <div className="wrapper">
          <img src="/images/logo/netflix.png" alt="netflix" className={'logo'} />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder={'Email or phone number'} />
          <input type="password" placeholder={'Password'} />
          <button className="login__btn">Sign In</button>
          <span>New to Netflix? <b>Sign up now</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a{' '}
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login
