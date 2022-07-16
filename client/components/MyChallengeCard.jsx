import React from "react";

import {
  deleteMyChallenge,
  patchMyChallenge,
  postMyChallenge,
} from "../apis/myChallenges";

function MyChallengeCard({ data, refresh }) {
  const handleDelete = () => {
    deleteMyChallenge(data.myChallengeId);
    refresh();
  };

  const Completed = (evt) => {
    evt.preventDefault();
    // console.log(data.id)
    patchMyChallenge({ id: data.myChallengeId, completed: true });
    refresh();
  };

  return (
    <>
      <div className="challengeCard">
     
        <div className="media-content">
          <p className="title is-6">{data.title}</p>
        </div>
        <div className="content">
          <p>{data.description}</p>
        </div>
        {!data.completed ? (
          <button className="button is-small is-rounded" onClick={Completed}>Completed</button>
        ) : (
          <button className="button is-small is-rounded">✅</button>
        )}
        <button className="button is-small is-rounded" onClick={handleDelete}>Delete</button>

        <button className="button is-small is-rounded">{data.points} points</button>
      </div>
    </>
  );
}

export default MyChallengeCard;
