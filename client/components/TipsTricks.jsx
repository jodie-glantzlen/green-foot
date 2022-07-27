import React from 'react'
import tips from '../../server/db/tips'
import TipCard from './TipCard'

function TipsTricks () {
  return (
    <>
      <h2 className="tips-title">
        If you need help completing your challenges, here are some great sources of inspiration.
      </h2>
      <div className="tips-container">
        {tips.map(tip => <TipCard data={tip} key={tip.id} />)}
      </div>
    </>
  )
}
export default TipsTricks
