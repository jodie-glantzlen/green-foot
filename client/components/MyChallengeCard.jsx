import React from 'react'

import { postMyChallenge } from '../apis/myChallenges'

function MyChallengeCard({ data }) {


  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button>Delete</button>
      <button>Completed</button>
      <button>{data.points} points</button>
    </>
  )
}


export default MyChallengeCard
