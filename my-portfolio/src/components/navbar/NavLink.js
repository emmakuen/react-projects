import React from "react";
import "./navbar.css";

const NavLink = ({ destination, children }) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        {children}
        <span className="link-text">{destination}</span>
      </a>
    </li>
  );
};

export default NavLink;
