import React, { useEffect, useState } from 'react'
//import ProgressBar from '@ramonak/react-progress-bar'

import { fetchAllMyChallenges } from '../apis/myChallenges'
import MyChallengeCard from './MyChallengeCard'

function MyChallenges () {

  const [myChallengesArr, setMyChallengesArr] = useState([])

  useEffect(() => {
    refreshMyChallenges()
  }, [])

  const refreshMyChallenges = () => {
    fetchAllMyChallenges()
      .then((results) => {
        setMyChallengesArr(results)
      })
  }

  // POINTS SYSTEM
  const currentPoints = myChallengesArr.reduce((total, challenge) => {
    if (challenge.completed) {
      return total + challenge.points
    } else {
      return total
    }
  }, 0)

  // RANKS SYSTEM
  let currentRank = ''

  if (currentPoints < 20) {
    currentRank = 'Tofu Torchbearer'
  } else if (currentPoints >= 20 && currentPoints < 60) {
    currentRank = 'Soy Samurai'
  } else if (currentPoints >= 60 && currentPoints < 120) {
    currentRank = 'Kale King'
  } else {
    currentRank = 'Polar Bear Protector'
  }

  return (
    <>     
      <h1 className='has-text-centered'>My Challenges </h1>
      <div className='challenge_container'>
        {myChallengesArr.map(challenge => <MyChallengeCard data={challenge} key={challenge.id} refresh={refreshMyChallenges} />)}
      </div>
      <div className='points-section'>
        <h3>My Score: {currentPoints}</h3>
        <h3>My Rank: {currentRank}</h3>
        {/* <ProgressBar completed={currentPoints} /> */}
        <span>
          {currentRank === 'Tofu Torchbearer' && 
          <img src="/torch.png" alt="Cute torch icon" />}
          {currentRank === 'Soy Samurai' && 
          <img src="/katana.png" alt="Cute katana icon" />}
          {currentRank === 'Kale King' && 
          <img src="/crown.png" alt="Cute crown icon" />}
          {currentRank === 'Polar Bear Protector' && 
          <img src="/polar-bear.png" alt="Cute polar bear icon" />}
        </span>
        <p className='creds'>Icons by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from Flaticon</p>
      </div> 
    </>
  )
}


export default MyChallenges
