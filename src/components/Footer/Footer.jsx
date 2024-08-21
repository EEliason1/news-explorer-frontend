import "./Footer.css";
import { Link } from "react-router-dom";

import githubIcon from "../../assets/github-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </h2>
      <div className="footer__links">
        <div className="footer__text">
          <Link to="/" className="react__link">
            <p className="footer__link footer__link_text">Home</p>
          </Link>
          <p className="footer__link footer__link_text">TripleTen</p>
        </div>
        <div className="footer__icons">
          <img
            src={githubIcon}
            alt="github icon"
            className="footer__link footer__link_icon"
          />
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="footer__link footer__link_icon"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
