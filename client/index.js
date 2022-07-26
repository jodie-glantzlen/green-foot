import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain="green-foot.au.auth0.com"
          clientId="ZlH4SB0E0mtbIIPNcoq6m6twiieiqHed"
          redirectUri="green-foot.herokuapp.com"
          audience="https://green-foot.au.auth0.com/api/v2/"
          scope="read:current_user update:current_user_metadata"
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
})
