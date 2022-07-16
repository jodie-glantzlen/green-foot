import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="branding">
        {/* <img className="image is-128x128" src="/Greenfoot.png" alt="Green Foot logo" /> */}
        <img src="/Greenfoot.png" alt="Green Foot logo" />
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <Link to="/">Home</Link>
          </a>
          <a className="navbar-item">
            <Link to="/mychallenges">My Challenges</Link>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav