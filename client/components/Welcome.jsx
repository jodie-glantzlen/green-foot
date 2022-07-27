import React from 'react'
import AuthenticationButton from './AuthenticationButton'
import SignupButton from './SignupButton'
import { useAuth0 } from '@auth0/auth0-react'

const handleClick = () => {
  window.location.href = '/home'
}

export const Welcome = () => {
  const { isAuthenticated } = useAuth0()

  const getButtons = () => {
    if (isAuthenticated) {
      return <button className="welcome-button" onClick={handleClick}>
        <AuthenticationButton />
      </button>
    }
    return <div className="button-row">
      <button className="welcome-button" onClick={handleClick}>
        <SignupButton />
      </button>
      <button className="welcome-button" onClick={handleClick}>
        <AuthenticationButton />
      </button>
    </div>
  }

  return (
    <div className="animated-title">
      <div className="one">
        <span>Welcome</span>
        <span>to</span><br />
      </div>
      <div className="two">
        <img src="/transparent-green-foot.png" alt="Green Foot logo" />
      </div>
      <div className="three">
        <span className="animated-content">Daily</span>
        <span className="animated-content">challenges</span>
        <span className="animated-content">to</span>
        <span className="animated-content">help</span>
        <span className="animated-content">save</span>
        <span className="animated-content">the</span>
        <span className="animated-content">planet</span>
      </div>
      {getButtons()}
    </div>
  )
}
