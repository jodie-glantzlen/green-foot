import React from 'react'

import { Routes, Route } from 'react-router-dom'

function ChallengeCard({ data }) {

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button>Accept</button>
      <button>{data.points} points</button>
    </>
  )
}


export default ChallengeCard
