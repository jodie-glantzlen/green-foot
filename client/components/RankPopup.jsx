import React from "react";

function RankPopup ({viewRankPopup, rank}) {

  return (
    <div className="overlay">
      <div className="banaa">
          <p className="title is-4">
            New Rank: {rank}
          </p>
        <div className="popup-icons">
          {rank === "Tofu Torchbearer" && (
            <img src="/torch.png" alt="Cute torch icon" />
          )}
          {rank === "Soy Samurai" && (
            <img src="/katana.png" alt="Cute katana icon" />
          )}
          {rank === "Kale King" && (
            <img src="/crown.png" alt="Cute crown icon" />
          )}
          {rank === "Polar Bear Protector" && (
            <img src="/polar-bear.png" alt="Cute polar bear icon" />
          )}
        </div>
          {rank !== 'Polar Bear Protector' &&
            <div>
              <p>
                Well done! You just unlocked new challenges!
              </p>
              <p>Go and grab them on the Home page.</p>
              <br />
              <button className="button is-small is-rounded" onClick={evt => viewRankPopup(evt)}>Got it!</button>
            </div>
          }
          {rank == 'Polar Bear Protector' &&
            <div>
              <p>Awesome, you completed all the challenges!</p>
              <p>Thanks for helping the planet 🌏</p>
              <br />
              <button className="button is-small is-rounded" onClick={evt => viewRankPopup(evt)}>
                Close
              </button>
            </div>
          }
      </div>
    </div>
  )
}

export default RankPopup