import React from "react";

function RankPopup ({viewRankPopup, rank}) {

  return (
    <div className="overlay">
      <div className="banaa">
        <div className="banaa-content">
          <p className="title is-4">
            New Rank: {rank}
          </p>

          {rank !== 'Polar Bear Protector' &&
            <div>
              <p>
                Well done! You just unlocked new challenges!
              </p>
              <p>Go and grab them on the Home page.</p>
              <button className="button is-small is-rounded" onClick={evt => viewRankPopup(evt)}>Got it!</button>
            </div>
          }
          {rank == 'Polar Bear Protector' &&
            <div>
              <p>Awesome, you completed all the challenges!</p>
              <p>Thanks for helping the planet 🌏</p>
              <button className="button is-small is-rounded" onClick={evt => viewRankPopup(evt)}>
                Close
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default RankPopup