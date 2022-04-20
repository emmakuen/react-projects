import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <span className="logo">e-Admin</span>
        </div>
        <div className="navRight">
          <div className="navIconContainer">
            <NotificationsNone className="navIcon" />
            <div className="navIconBadge">2</div>
          </div>
          <Language className="navIcon" />
          <Settings className="navIcon" />
          <img
            src="https://images.unsplash.com/photo-1649706796644-c507eb2835bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="navAvatar"
          />
        </div>
      </div>
    </div>
  );
}
