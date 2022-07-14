import React from 'react'

import { postMyChallenge } from '../apis/myChallenges'
import { deleteMyChallenge } from '../apis/myChallenges'

function MyChallengeCard({ data, refresh }) {

  const handleDelete = () => {
    deleteMyChallenge(data.myChallengeId)
    refresh()
  }


  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button onClick={handleDelete}>Delete</button>
      <button>Completed</button>
      <button>{data.points} points</button>
    </>
  )
}


export default MyChallengeCard
