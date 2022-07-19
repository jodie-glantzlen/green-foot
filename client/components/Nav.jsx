import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Welcome</Link>
      <Link to="/home">Home</Link>
      <Link to="/mychallenges">My Challenges</Link>
      <Link to="/tips">Tips & Tricks!</Link>
      <LoginButton/>
      <LogoutButton/>

    </nav>
  )
}

export default Nav