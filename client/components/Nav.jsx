import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="branding">
        <img src="/Greenfoot.png" alt="Green Foot logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mychallenges">My Challenges</Link>
      </div>
    </nav>
  )
}

export default Nav