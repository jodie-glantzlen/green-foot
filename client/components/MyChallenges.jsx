import React, { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

import { fetchAllMyChallenges } from '../apis/myChallenges'
import MyChallengeCard from './MyChallengeCard'

function MyChallenges () {

  //const [currentPoints, setCurrentPoints] = useState(0)

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




  return (
    <>
    <h1 className=''>My Challenges </h1>
    <div className='challenge_container'>
    {myChallengesArr.map(challenge => <MyChallengeCard data={challenge} key={challenge.id} refresh={refreshMyChallenges} />)}
    </div>
    <div className='points-section'>
      <h3>Green Score: {currentPoints}</h3>
      <ProgressBar completed={currentPoints} />

    </div>
    </>
  )
}


export default MyChallenges
