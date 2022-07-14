import React from 'react'

import { postMyChallenge } from '../apis/myChallenges'

function ChallengeCard({ data }) {

  const handleClick = (evt) => {
    evt.preventDefault()
    // console.log(data.id)
   postMyChallenge({challenge_id: data.id})
  }

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button onClick={handleClick}>Accept</button>
      <button>{data.points} points</button>
    </>
  )
}


export default ChallengeCard
