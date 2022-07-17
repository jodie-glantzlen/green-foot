import React from 'react'
import MyChallenges from './MyChallenges'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mychallenges' element={<MyChallenges />} />

      </Routes>
    </>
  )
}

export default App
