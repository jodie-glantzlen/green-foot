import React from "react";

import {
  deleteMyChallenge,
  patchMyChallenge,
  postMyChallenge,
} from "../apis/myChallenges"

function MyChallengeCard({ data, refresh }) {
  const handleDelete = () => {
    deleteMyChallenge(data.myChallengeId)
    refresh()
  }

  const Completed = (evt) => {
    evt.preventDefault()
    // console.log(data.id)
    patchMyChallenge({ id: data.myChallengeId, completed: true })
    refresh()
  }

  return (
    <>
      <div className="my-challenge-card">
        <h2 className="title">{data.title}</h2>
        <button className="button is-small is-rounded">
          {data.points} points
        </button>
        <p>{data.description}</p>
        <div className="complete-or-delete">
          {!data.completed ? (
            <button className="button is-small is-rounded" onClick={Completed}>Completed</button>
          ) : (
            <button className="button is-small is-rounded">✅</button>
          )}
          <button className="button is-small is-rounded" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default MyChallengeCard
