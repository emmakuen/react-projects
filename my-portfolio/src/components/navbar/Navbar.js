import "./navbar.css";
import NavLink from "./NavLink";
import HomeIcon from "./HomeIcon";
import AboutIcon from "./AboutIcon";
import PortfolioIcon from "./PortfolioIcon";
import ContactIcon from "./ContactIcon";
import { ReactComponent as DarkIcon } from "../../svg/darkmode.svg";

const Navbar = () => {
  const fillColor = "#df6668";
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavLink destination="home">
          <HomeIcon fill={fillColor} />
        </NavLink>
        <NavLink destination="about">
          <AboutIcon fill={fillColor} />
        </NavLink>
        <NavLink destination="portfolio">
          <PortfolioIcon fill={fillColor} />
        </NavLink>
        <NavLink destination="contact">
          <ContactIcon fill={fillColor} />
        </NavLink>
        <NavLink destination="dark mode">
          <DarkIcon fill={fillColor} className="nav-icon" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
