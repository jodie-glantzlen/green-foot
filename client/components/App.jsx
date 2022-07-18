import React, { useState } from 'react'
import MyChallenges from './MyChallenges'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'

function App() {
const [soyFlag, setSoyFlag] = useState(false)
const [kaleFlag, setKaleFlag] = useState(false)
const [bearFlag, setBearFlag] = useState(false)

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route 
        path='/mychallenges' 
        element={<MyChallenges 
          setSoyFlag={setSoyFlag} soyFlag={soyFlag}
          setKaleFlag={setKaleFlag} kaleFlag={kaleFlag}
          setBearFlag={setBearFlag} bearFlag={bearFlag}
        />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
