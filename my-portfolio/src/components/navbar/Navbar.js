import "./navbar.css";
import NavLink from "./NavLink";
import HomeIcon from "./HomeIcon";
import AboutIcon from "./AboutIcon";
import PortfolioIcon from "./PortfolioIcon";
import ContactIcon from "./ContactIcon";
import { ReactComponent as DarkIcon } from "../../svg/darkmode.svg";
import { primaryColor } from "../../constants/themes";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavLink destination="home">
          <HomeIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="about">
          <AboutIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="portfolio">
          <PortfolioIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="contact">
          <ContactIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="dark mode">
          <DarkIcon fill={primaryColor} className="nav-icon" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
