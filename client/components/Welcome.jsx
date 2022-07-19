import React from "react";
import { Link } from "react-router-dom";


export const Welcome = () => {
  return (
    // <div className="welcome-page-container">
      <div className="animated-title">
        <div className="one">
          <span>Welcome</span>
          <span>to</span><br />
        </div>
        <div className="two">
          <img src="/blended.png" alt="Green Foot logo" />
        </div>
        <div className="three">
          <span className="animated-content">Daily</span>
          <span className="animated-content">challenges</span>
          <span className="animated-content">to</span>
          <span className="animated-content">help</span>
          <span className="animated-content">save</span>
          <span className="animated-content">the</span>
          <span className="animated-content">planet</span>
        </div>
          <button className="get-started">Get Started</button>
      </div>
    // </div>
  );
};
