import React from "react"


function TipCard ({ data }) {

  return (
    <div className="tip-card">
      <h2 className="title">{data.name}</h2>
      <img src={data.logo} />
      <p>{data.description}</p>
      <p><a href={data.url} target="_blank">Check it out</a></p>
    </div>
  )
}

export default TipCard