import React from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";

const NavLink = ({ destination, children, text, onClick }) => {
  if (!destination)
    return (
      <li className="nav-item theme" onClick={onClick}>
        <div className="nav-link">
          {children}
          <span className="link-text">{text}</span>
        </div>
      </li>
    );
  return (
    <li className="nav-item">
      <a href={`/#${destination}`} className="nav-link">
        {children}
        <span className="link-text">{text}</span>
      </a>
    </li>
  );
};

export default NavLink;
