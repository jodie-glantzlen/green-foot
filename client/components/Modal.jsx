import React from "react";
import { viewModal } from './ChallengeCard'

function Modal({ data , viewModal, handleClick }) {

  console.log(data)


  return (
    <div className="overlay">
      <div className="banaa">
          <p className="title">{data.title}</p>
          <p>{data.description}</p>
          <br />
          <button className="button is-rounded">
            {data.points} points
          </button>
          <br />
          <button className="button is-small is-rounded"
            onClick={evt => viewModal(evt)}>
            Close
          </button>
      </div>
    </div>

  )
}

export default Modal