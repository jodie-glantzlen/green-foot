import React from 'react'

function Modal ({ data, viewModal }) {
  return (
    <div className="overlay">
      <div className="modal-container">
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
