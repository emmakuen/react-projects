import React, { useState } from "react";
import "../styles/SideBar.css";

const SideBar = ({ fetchJokes }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState("");

  let notificationText = "";
  const handleClick = () => {
    setShowNotification(true);
    setNotification("Fetching...");
    fetchJokes().then((res, err) => {
      if (!err) {
        setNotification("Jokes added!");
        setTimeout(() => {
          setShowNotification(false);
          setNotification("");
        }, 1500);
      }
    });
  };

  return (
    <div className="SideBar">
      <h1>
        Dad <span>jokes</span>
      </h1>
      <div>
        <p className="SideBar-emoji">😂</p>
      </div>
      <div className="button-container">
        <button onClick={handleClick}>New Jokes</button>
        {showNotification && <p className="notification">{notification}</p>}
      </div>
    </div>
  );
};

export default SideBar;
