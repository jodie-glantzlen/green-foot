import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/mychallenges">My Challenges</Link>
    </nav>
  )
}

export default Nav