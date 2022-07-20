import React from "react"
import tips from "../../server/db/tips"
import TipCard from "./TipCard"

function TipsTricks() {

  return (
    <>
    <h2 className="tips-msg-container "> These people are a great source of inspiration  </h2>
      <div className="tips-container">
      {tips.map(tip => <TipCard data={tip} key={tip.id}/>)}
      </div>
    </>
  )
}
export default TipsTricks