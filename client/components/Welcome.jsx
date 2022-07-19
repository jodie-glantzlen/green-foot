import React from "react";
import { Link } from "react-router-dom";


export const Welcome = () => {
  return (
    <div className="welcome-page-container">
      <h1 className="animated-title">
        <span>Welcome</span>
        <span>to</span><br />
        <span><img src="/blended.png" alt="Green Foot logo" /></span><br />
        <span className="animated-content">Daily</span>
        <span className="animated-content">challenges</span>
        <span className="animated-content">to</span>
        <span className="animated-content">help</span>
        <span className="animated-content">save</span>
        <span className="animated-content">the</span>
        <span className="animated-content">planet</span><br />
        <span><button>Login</button></span>
      </h1>
    </div>
  );
};
