import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import { fetchAllChallenges } from '../apis/challenges'
import ChallengeCard from './ChallengeCard'

function Home() {
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    fetchAllChallenges()
    .then((res) => {
      setChallenges(res)
    })
  }, [])

  return (
    <>
    <h1 className=''>My home </h1>
    <div className='challenge_container'>
    {challenges.map(challenge => <ChallengeCard data={challenge} key={challenge.id} />)}
    </div>
    </>
  )
}


export default Home
