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

<div className="challengeCard">

<div className="media-content">
          <p className="title is-4">{data.title}</p>
        </div>
        <div className="content">
          <p>{data.description}</p>
        </div>
      <button className="button is-primary is-rounded"  onClick={handleClick}>Accept</button>
      <button class="button is-info is-light is-rounded">{data.points} points</button>
      </div>
    </>
  )
}


export default ChallengeCard
