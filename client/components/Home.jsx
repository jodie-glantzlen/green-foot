import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import { fetchAllChallenges } from '../apis/challenges'
import { fetchAllMyChallenges } from '../apis/myChallenges'
import ChallengeCard from './ChallengeCard'

function Home() {
  const [challenges, setChallenges] = useState([])
  const [myChallengesArr, setMyChallengesArr] = useState([])
  const [currentPointsState, setCurrentPointsState] = useState()

  console.log(challenges)

  useEffect(() => {
    refreshChallenges()
    refreshMyChallenges()
  }, [])

  useEffect(() => {
    if (currentPointsState < 20) {
      setChallenges(challenges.slice(0, 4))
      console.log('easy')
      console.log(challenges.slice(0, 4))
    } else if (currentPointsState >= 20 && currentPointsState < 60) {
      setChallenges(challenges.slice(0, 7))
      console.log('medium')
    } else {
      setChallenges(challenges)
      console.log('all levels')
    }

  }, [currentPointsState])

  const refreshChallenges = () => {
    fetchAllChallenges()
      .then((res) => {
        setChallenges(res)
      })
  }

  const refreshMyChallenges = () => {
    fetchAllMyChallenges()
      .then((results) => {
        setMyChallengesArr(results)

        setCurrentPointsState(results.reduce((total, challenge) => {
          if (challenge.completed) {
            return total + challenge.points
          } else {
            return total
          }
        }, 0))
      })
  }


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
