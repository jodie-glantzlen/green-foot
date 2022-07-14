import React, { useEffect, useState } from 'react'

import { fetchAllMyChallenges } from '../apis/myChallenges'
import ChallengeCard from './ChallengeCard'

function MyChallenges () {

  const [myChallengesArr, setMyChallengesArr] = useState([])
  useEffect(() => {
    fetchAllMyChallenges()
    .then((results) => {
      setMyChallengesArr(results)
    })
  }, [])

  return (
    <>
    <h1 className=''>My Challenges </h1>
    <div className='challenge_container'>
    {myChallengesArr.map(challenge => <ChallengeCard data={challenge} key={challenge.id} />)}
    </div>
    </>
  )
}


export default MyChallenges
