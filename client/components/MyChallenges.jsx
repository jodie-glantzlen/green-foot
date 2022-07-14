import React, { useEffect, useState } from 'react'

import { fetchAllMyChallenges } from '../apis/myChallenges'

function MyChallenges () {

  const [myChallengesArr, setMyChallengesArr] = useState([])
  useEffect(() => {
    fetchAllMyChallenges()
    .then((results) => {
      setMyChallengesArr(results)
    })
  }, [])

  return (
    <>
{console.log(myChallengesArr)}
</>
  )
}


export default MyChallenges
