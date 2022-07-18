import React from "react";
import { Link } from "react-router-dom";


export const Welcome = () => {
  return (
    <>
    <div className="columns is-mobile is-multiline is-centered">
      <div className="column is-narrow">
        <div className="welcome-container">
      <h1>Welcome to</h1>
      <img className="welcome-image" src="./Greenfoot.png"></img>
      <h3>
        Green Foot is a game aimed to encourage people to reduce their carbon
        footprint in an easy and supportive way :) 
      </h3>

      <ul>
        <strong>How it works:</strong>
        <li>There are 3 levels, easy, medium and hard</li>
        <li>There are 4 challenges per level</li>
        <li>Easier levels earn less points, harder level earn more</li>
        <li>Earn more points to achieve higher ranks</li>

      </ul>
      <Link className='black-text-please' to="/home">Get Started!</Link>
      </div>
      </div>
    </div>
    
    </>
  );
};
