import React from "react";
import { Link } from "react-router-dom";

function Nav () {
  return (
    <nav>
      <h1>Green Foot</h1>
      <img src="/Greenfoot.png" alt="Green Foot logo" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/mychallenges">My Challenges</Link>
      </div>
    </nav>
  )
}

export default Nav