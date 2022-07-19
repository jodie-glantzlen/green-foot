import React from "react"
import tips from "../../server/db/tips"
import TipCard from "./TipCard"

function TipsTricks() {

  return (
    <>
      <h1>Not sure where to start?</h1>
      <div className="tips-container">
      {tips.map(tip => <TipCard data={tip} key={tip.id}/>)}
      </div>
    </>
  )
}
export default TipsTricks