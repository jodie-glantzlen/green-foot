import React, { useState } from 'react'
import Modal from './Modal'

import { postMyChallenge } from '../apis/myChallenges'
import { useAuth0 } from '@auth0/auth0-react'

function ChallengeCard ({ data }) {
  const [none, setDisplay] = useState(false)
  const [modal, setModal] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const { user } = useAuth0()

  const handleClick = (evt) => {
    evt.preventDefault()
    postMyChallenge({
      user_email: user.email,
      challenge_id: data.id
    })
    setAccepted(true)
  }

  const viewModal = (evt) => {
    if (modal === false) {
      setModal(true)
    } if (modal === true) {
      setModal(false)
    }
  }
  return (
    <>
      <div className="challenge-card">
        <h2 className="title">{data.title}</h2>
        {none && <p>{data.description}</p>}
        <img src='./Greenfoot.png'></img>
        <p>Level: {data.level}</p>
        <button className="button is-small is-rounded" onClick={viewModal}>Details</button>
        <button className="button is-small is-rounded" onClick={handleClick}>
          {accepted ? '✅' : 'Accept'}
        </button>
        {none && <button className="button is-small is-rounded">{data.points} points</button>}
        {modal && <Modal data={data} viewModal={viewModal} handleClick={handleClick} />}
      </div>
    </>
  )
}

export default ChallengeCard
