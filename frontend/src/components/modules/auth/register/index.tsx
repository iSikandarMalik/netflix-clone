import React, { useRef, useState } from 'react'
import './style.scss'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const handleStart = (): void => {
    const elem = emailRef.current
    if (elem) setEmail(elem.value)
  }

  const handleFinish = (): void => {
    const elem = passwordRef.current
    if (elem) setPassword(elem.value)
  }

  return (
    <div className="register__main">
      <div className="top">
        <div className="wrapper">
          <img src="/images/logo/netflix.png" alt="netflix" className={'logo'} />
          <button className="login__btn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" name="email" ref={emailRef} />
            <button onClick={handleStart}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" name="password" ref={passwordRef} />
            <button onClick={handleFinish}>Start</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register
