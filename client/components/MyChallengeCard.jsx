import React from 'react'

import {
  deleteMyChallenge,
  patchMyChallenge
} from '../apis/myChallenges'

function MyChallengeCard ({ data, refresh }) {
  const handleDelete = () => {
    deleteMyChallenge(data.myChallengeId)
    refresh()
  }

  const setAsCompleted = (evt) => {
    evt.preventDefault()
    patchMyChallenge({ id: data.myChallengeId, completed: true })
    refresh()
  }

  return (
    <>
      <div className="my-challenge-card">
        <h2 className="title">{data.title}</h2>
        <button className="button is-rounded">
          {data.points} points
        </button>
        <p>{data.description}</p>
        <div className="complete-or-delete">
          <button className="button is-small is-rounded" onClick={setAsCompleted}>
            {data.completed ? '✅' : 'Completed'}
          </button>
          <button className="button is-small is-rounded" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default MyChallengeCard
