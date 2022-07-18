import React from "react";

function RankPopup ({viewRankPopup, rank}) {

  return (
    <div className="banaa">
      <div className="banaa-content">
        <p className="title is-4">{rank}</p>
  
        <button className="button is-small is-rounded" onClick={evt => viewRankPopup(evt)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default RankPopup