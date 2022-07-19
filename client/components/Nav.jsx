import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Welcome</Link>
      <Link to="/home">Home</Link>
      <Link to="/mychallenges">My Challenges</Link>
      <Link to="/tips">Tips & Tricks!</Link>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>

    </nav>
  )
}

export default Nav