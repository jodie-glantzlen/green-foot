import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Welcome</Link>
      <Link to="/home">Home</Link>
      <Link to="/mychallenges">My Challenges</Link>
      <Link to="/tips">Tips & Tricks!</Link>

    </nav>
  )
}

export default Nav