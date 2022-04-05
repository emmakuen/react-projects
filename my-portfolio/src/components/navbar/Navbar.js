import "./navbar.css";
import NavLink from "./NavLink";
import HomeIcon from "./HomeIcon";
import AboutIcon from "./AboutIcon";
import PortfolioIcon from "./PortfolioIcon";
import ContactIcon from "./ContactIcon";
import { ReactComponent as DarkIcon } from "../../svg/darkmode.svg";
import { ReactComponent as LightIcon } from "../../svg/lightmode.svg";
import { primaryColor, useTheme } from "../../contexts/useTheme";

const Navbar = () => {
  const { theme, LIGHT, toggleTheme } = useTheme();
  const ThemeButton = theme === LIGHT ? DarkIcon : LightIcon;
  const themeToggleText = theme === LIGHT ? "Dark Mode" : "Light Mode";

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavLink destination="home" text="Home">
          <HomeIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="about" text="About Me">
          <AboutIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="portfolio" text="Portfolio">
          <PortfolioIcon fill={primaryColor} />
        </NavLink>
        <NavLink destination="contact" text="Contact">
          <ContactIcon fill={primaryColor} />
        </NavLink>
        <NavLink text={themeToggleText} onClick={toggleTheme}>
          <ThemeButton fill={primaryColor} className="nav-icon" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
