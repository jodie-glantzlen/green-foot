import React, { useState } from 'react'
import MyChallenges from './MyChallenges'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'
import TipsTricks from './TipsTricks'

function App() {
const [soyFlag, setSoyFlag] = useState(false)
const [kaleFlag, setKaleFlag] = useState(false)
const [bearFlag, setBearFlag] = useState(false)

  return (
    <>
      <Nav />
<div className='home-overlay'>
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
        <Route path='/tips' element={<TipsTricks />} />
      </Routes>
      </div>
    </>
  )
}

export default App
