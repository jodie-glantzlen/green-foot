import React from 'react'
import MyChallenges from './MyChallenges'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/mychallenges' element={<MyChallenges />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
