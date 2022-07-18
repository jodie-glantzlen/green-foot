import React, { useEffect, useState } from 'react'
//import ProgressBar from '@ramonak/react-progress-bar'

import { fetchAllMyChallenges } from '../apis/myChallenges'
import MyChallengeCard from './MyChallengeCard'
import RankPopup from './RankPopup'

function MyChallenges({
  setSoyFlag,
  soyFlag,
  setKaleFlag,
  kaleFlag,
  setBearFlag,
  bearFlag}) {
  const [currentRank, setcurrentRank] = useState('')
  const [showRank, setShowRank] = useState(false)
  const [myChallengesArr, setMyChallengesArr] = useState([])

  useEffect(() => {
    refreshMyChallenges()
  }, [])

  const refreshMyChallenges = () => {
    fetchAllMyChallenges()
      .then((results) => {
        setMyChallengesArr(results)
      })
  }

  useEffect(() => {
    setShowRank(true)
  }, [currentRank])


  // POINTS SYSTEM
  const currentPoints = myChallengesArr.reduce((total, challenge) => {
    if (challenge.completed) {
      return total + challenge.points
    } else {
      return total
    }
  }, 0)

  useEffect(() => {
   
    if (currentPoints < 20) {
      setcurrentRank('Tofu Torchbearer')
    } else if (currentPoints >= 20 && currentPoints < 60) {
      setcurrentRank('Soy Samurai')
    } else if (currentPoints >= 60 && currentPoints < 120) {
      setcurrentRank('Kale King')
    } else {
      setcurrentRank('Polar Bear Protector')
    }
  }, [currentPoints])


  const viewRankPopup = (evt) => {
    if (showRank === true) {
      setShowRank(false)
      if(currentPoints === 20) {
        setSoyFlag(true)
      } else if(currentPoints === 60) {
        setKaleFlag(true)
      } else if(currentPoints === 120) {
        setBearFlag(true)
      }
    }
  }

  return (
    <>
      <h1 className='has-text-centered'>My Challenges </h1>
      <div className='challenge_container'>
        {myChallengesArr.map(challenge => <MyChallengeCard data={challenge} key={challenge.id} refresh={refreshMyChallenges} />)}
      </div>
      <div className='points-section'>
        <h3>My Score: {currentPoints}</h3>
        <h3>My Rank: {currentRank}</h3>
        {/* <ProgressBar completed={currentPoints} /> */}
        <div>
          <a href="https://www.flaticon.com/authors/freepik">
            {currentRank === 'Tofu Torchbearer' &&
              <img src="/torch.png" alt="Cute torch icon" />}
            {currentRank === 'Soy Samurai' &&
              <img src="/katana.png" alt="Cute katana icon" />}
            {currentRank === 'Kale King' &&
              <img src="/crown.png" alt="Cute crown icon" />}
            {currentRank === 'Polar Bear Protector' &&
              <img src="/polar-bear.png" alt="Cute polar bear icon" />}
          </a>
        </div>
      </div>


      {(currentPoints === 20 && showRank === true && soyFlag === false) && <RankPopup viewRankPopup={viewRankPopup} rank={currentRank} />}
      {(currentPoints === 60 && showRank === true && kaleFlag === false) && <RankPopup viewRankPopup={viewRankPopup} rank={currentRank} />}
      {(currentPoints === 120 && showRank === true && bearFlag === false) && <RankPopup viewRankPopup={viewRankPopup} rank={currentRank} />}
    </>
  )
}


export default MyChallenges

