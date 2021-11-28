import React from "react";
import "../styles/SideBar.css";

const SideBar = ({ fetchJokes }) => {
  return (
    <div className="SideBar">
      <h1>
        Dad <span>jokes</span>
      </h1>
      <div>
        <p className="SideBar-emoji">😂</p>
      </div>
      <button onClick={fetchJokes}>New Jokes</button>
    </div>
  );
};

export default SideBar;
