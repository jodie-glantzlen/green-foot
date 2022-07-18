import React from "react";

function RankPopup ({viewRankPopup, rank}) {

  return (
    <div className="overlay">
      <div className="banaa">
        <div className="banaa-content">
          <p className="title is-4">
            New Rank: {rank}
          </p>
          <p>
            Well done!
          </p>
          {rank !== 'Polar Bear Protector' &&
            <div>
              <p>
                You just unlocked new challenges.
              </p>
              <button onClick={evt => viewRankPopup(evt)}>
                <a href="/home">Go and grab them here</a>
              </button>
              </div>}
              <p>
              Thanks for saving the planet 🌏
              </p>
              {rank == 'Polar Bear Protector' && <button className="button is-small is-rounded" onClick={evt => viewRankPopup(evt)}>
            Close
          </button>}
          
        </div>
      </div>
    </div>
  )
}

export default RankPopup