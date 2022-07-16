import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <img src="/Greenfoot.png" alt="Green Foot logo" />
      <Link to="/">Home</Link>
      <Link to="/mychallenges">My Challenges</Link>
    </nav>
  )
}

export default Nav