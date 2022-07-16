import React, { useState } from 'react'
import Modal from './Modal'

import { postMyChallenge } from '../apis/myChallenges'




function ChallengeCard({ data }) {

  const [none, setDisplay] = useState(false)
  const [modal, setModal] = useState(false)

  const handleClick = (evt) => {
    evt.preventDefault()
    // console.log(data.id)
   postMyChallenge({challenge_id: data.id})
  }


 const viewModal = (evt) => {
    if(modal === false) {
      setModal(true)
    } if (modal === true) {
      setModal(false)
    }
  }

  return (
    <>

      <div className="challengeCard">

        <div>
          <p className="title is-6">{data.title}</p>
        </div>
        <div className="content">
          {none && <p>{data.description}</p>}
        </div>

        <img src='./Greenfoot.png'></img>

        <button className="button is-small is-rounded" onClick={viewModal}>Details</button>
        <button className="button is-small is-rounded" onClick={handleClick}>Accept</button>
        {none && <button className="button is-small is-rounded">{data.points} points</button>}
      </div>


      {modal && <Modal data={data} viewModal={viewModal} handleClick={handleClick} />}


    </>
  )
}


export default ChallengeCard
