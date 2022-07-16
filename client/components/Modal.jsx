import React from "react";


function Modal({ data }) {

  console.log(data)



const close = (evt) => {
  evt.preventDefault()
  window.location.reload()
}

  return (
    <div className="banaa">
      <div className="banaa-content">
      <p className="title is-4">{data.title}</p>
      
      <p>{data.description}</p>
      
      </div>

      <button onClick={close} className="button is-danger">Close</button>
      </div>
  )
}

export default Modal