import "./sidebar.css";
import SidebarItem from "./SidebarItem";
import { routes } from "../../constants/routes";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {Object.keys(routes)
          .slice(0, 3)
          .map((key) => (
            <SidebarItem key={key} {...routes[key]} />
          ))}
      </ul>
      <h3 className="sidebarListTitle">MANAGE</h3>
      <ul className="sidebarList">
        {Object.keys(routes)
          .slice(3)
          .map((key) => (
            <SidebarItem key={key} {...routes[key]} />
          ))}
      </ul>
    </div>
  );
}
