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

  const currentPoints = myChallengesArr.reduce((total, challenge) => {
    if (challenge.completed) {
      return total + challenge.points
    } else {
      return total
    }
  }, 0)

  let currentRank = 'Tofu Torchbearer'

  if (currentPoints < 20) {
    currentRank = 'Tofu TorchBearer'
  } else if (currentPoints >= 20 && currentPoints < 60) {
    currentRank = 'Soy Samurai'
  } else if (currentPoints >= 60 && currentPoints < 120) {
    currentRank = 'Kale King'
  } else {
    currentRank = 'Polar Bear Protector'
  }

  return (
    <>
      <h1 className=''>My Challenges </h1>
      <div className='points-section'>
        <h3>Green Score: {currentPoints}</h3>
        <h3>Current Rank: {currentRank}</h3>
        {/* <ProgressBar completed={currentPoints} /> */}
      </div>
      <div className='challenge_container'>
        {myChallengesArr.map(challenge => <MyChallengeCard data={challenge} key={challenge.id} refresh={refreshMyChallenges} />)}
      </div>
    </>
  )
}


export default MyChallenges
