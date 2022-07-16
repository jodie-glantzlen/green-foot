import React from "react";
import { viewModal } from './ChallengeCard'

function Modal({ data , viewModal, handleClick }) {

  console.log(data)


  return (
    <div className="banaa">
      <div className="banaa-content">
        <p className="title is-4">{data.title}</p>
        <p>{data.description}</p>
        <button className="button is-small is-rounded">
          {data.points} points
        </button>
        <button className="button is-small is-rounded"
          onClick={evt => handleClick(evt)}>
          Accept
        </button>
        <button className="button is-small is-rounded"
          onClick={evt => viewModal(evt)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal