import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavLink = ({ destination, children }) => {
  return (
    <li className="nav-item">
      <a href={`/#${destination}`} className="nav-link">
        {children}
        <span className="link-text">{destination}</span>
      </a>
    </li>
  );
};

export default NavLink;
