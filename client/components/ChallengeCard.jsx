import React, { useState } from 'react'
import Modal from './Modal'

import { postMyChallenge } from '../apis/myChallenges'
import { useAuth0 } from '@auth0/auth0-react'
import { patchChallenge } from '../apis/challenges'

function ChallengeCard ({ data }) {
  const [modal, setModal] = useState(false)
  const { user } = useAuth0()

  const handleClick = (evt) => {
    evt.preventDefault()
    postMyChallenge({
      user_email: user.email,
      challenge_id: data.id
    })
    patchChallenge({ id: data.id, selected: true })
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
        <img src='./Greenfoot.png'></img>
        <p>Level: {data.level}</p>
        <button className="button is-small is-rounded" onClick={viewModal}>Details</button>
        <button className="button is-small is-rounded" onClick={handleClick}>
          {data.selected ? '✅' : 'Accept'}
        </button>
        {modal && <Modal data={data} viewModal={viewModal} />}
      </div>
    </>
  )
}

export default ChallengeCard
