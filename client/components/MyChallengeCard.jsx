import React from 'react'

import { deleteMyChallenge, patchMyChallenge, postMyChallenge } from '../apis/myChallenges'

function MyChallengeCard({ data, refresh }) {

  const handleDelete = () => {
    deleteMyChallenge(data.myChallengeId)
    refresh()
  }


  const Completed = (evt) => {
    evt.preventDefault()
    // console.log(data.id)
   patchMyChallenge({id: data.myChallengeId, completed: true})
   refresh()
  }


  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
 
      {!data.completed ? <button onClick={Completed}>Completed</button> :
      <button>✅</button>
      }
      <button onClick={handleDelete}>Delete</button>
    
      <button>{data.points} points</button>
    </>
  )
}


export default MyChallengeCard
