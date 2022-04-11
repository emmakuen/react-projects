import { ReactComponent as GithubLogo } from "../../svg/sns/github.svg";
import { ReactComponent as TwitterLogo } from "../../svg/sns/twitter.svg";
import { ReactComponent as LeetCodeLogo } from "../../svg/sns/leetcode.svg";
import { ReactComponent as TableauLogo } from "../../svg/sns/tableau.svg";
import { primaryColor } from "../../contexts/useTheme";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="f-logos">
        <a
          aria-label="Go to Emma's Github profile"
          href="https://github.com/emmakuen/"
        >
          <GithubLogo className="f-logo" fill={primaryColor} />
        </a>
        <a
          aria-label="Go to Emma's Twitter profile"
          href="https://twitter.com/Enkusshi"
        >
          <TwitterLogo className="f-logo" fill={primaryColor} />
        </a>
        <a
          aria-label="Go to Emma's LeetCode profile"
          href="https://leetcode.com/emmakuen"
        >
          <LeetCodeLogo className="f-logo bordered" />
        </a>
        <a
          aria-label="Go to Emma's Tableau Public profile"
          href="https://public.tableau.com/app/profile/kushie"
        >
          <TableauLogo className="f-logo bordered" />
        </a>
      </div>
      <p>Copyright &copy; {year} Emmaku</p>
    </footer>
  );
};

export default Footer;
