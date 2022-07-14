import React, { useEffect, useState } from 'react'

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

  return (
    <>
    <h1 className=''>My Challenges </h1>
    <div className='challenge_container'>
    {myChallengesArr.map(challenge => <MyChallengeCard data={challenge} key={challenge.id} refresh={refreshMyChallenges} />)}
    </div>
    </>
  )
}


export default MyChallenges
