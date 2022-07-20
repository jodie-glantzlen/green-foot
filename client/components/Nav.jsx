import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./authentication-button";
import Profile from "./Profile";

import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link to="/">Welcome</Link>
        <Link to="/home">Home</Link>
        {isAuthenticated && <Link to="/mychallenges">My Challenges</Link>}
        <Link to="/tips">Tips & Tricks</Link>
      </div>
      <div className="login-button">
        <div>
          <Profile />
        </div>
        <div >
          <AuthenticationButton />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
