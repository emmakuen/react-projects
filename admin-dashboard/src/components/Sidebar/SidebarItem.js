import React from "react";
import { Link } from "react-router-dom";

export default function SidebarItem({ path, icon, name, isActive }) {
  return (
    <Link to={path} className="sidebarItemLink">
      <li className={`sidebarItem${isActive ? " active" : ""}`}>
        {icon}
        {name}
      </li>
    </Link>
  );
}
