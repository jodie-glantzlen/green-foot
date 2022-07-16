import React from "react";
import { viewModal } from './ChallengeCard'

function Modal({ data , viewModal, handleClick }) {

  console.log(data)


  return (
    <div className="banaa">
      <div className="banaa-content">
      <p className="title is-4">{data.title}</p>
      
      <p>{data.description}</p>
      <button className="button is-primary is-rounded"  onClick={evt => handleClick(evt)}>Accept</button>
      </div>
      <button  className="button is-danger" onClick={evt => viewModal(evt)}>Close</button>
      </div>
  )
}

export default Modal