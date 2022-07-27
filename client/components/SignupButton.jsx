import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <a onClick={() => loginWithRedirect({ action: 'signup' })}>Register</a>
  )
}

export default SignupButton
