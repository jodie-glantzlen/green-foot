import React from 'react'

import { patchMyChallenge } from '../apis/myChallenges'

function MyChallengeCard({ data }) {


  const Completed = (evt) => {
    evt.preventDefault()
    // console.log(data.id)
   patchMyChallenge({id: data.myChallengeId, completed: true})
  }


  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button>Delete</button>
      {!data.completed ? <button onClick={Completed}>Completed</button> :
      <button>✅</button>
      }
      <button>{data.points} points</button>
    </>
  )
}


export default MyChallengeCard
