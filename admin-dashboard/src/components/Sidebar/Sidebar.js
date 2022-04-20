import "./sidebar.css";
import {
  Dashboard,
  Timeline,
  ConfirmationNumber,
  Group,
  Apartment,
  GroupWork,
} from "@material-ui/icons";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        <SidebarItem title="Dashboard">
          <Dashboard />
        </SidebarItem>
        <SidebarItem title="Analytics" isActive={true}>
          <Timeline />
        </SidebarItem>
        <SidebarItem title="Tickets">
          <ConfirmationNumber />
        </SidebarItem>
      </ul>
      <h3 className="sidebarListTitle">MANAGE</h3>
      <ul className="sidebarList">
        <SidebarItem title="Projects">
          <Apartment />
        </SidebarItem>
        <SidebarItem title="Teams">
          <GroupWork />
        </SidebarItem>
        <SidebarItem title="Users">
          <Group />
        </SidebarItem>
      </ul>
    </div>
  );
}
