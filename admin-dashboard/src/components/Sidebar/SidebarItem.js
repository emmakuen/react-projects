import React from "react";

export default function SidebarItem({ title, children, isActive }) {
  return (
    <li className={`sidebarItem${isActive ? " active" : ""}`}>
      {children}
      {title}
    </li>
  );
}
