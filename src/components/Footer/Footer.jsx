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
          <Link to="/" className="navigation__react-link">
            <p className="footer__link footer__link_text">Home</p>
          </Link>
          <a
            href="https://tripleten.com/"
            className="navigation__react-link"
            target="_blank"
          >
            <p className="footer__link footer__link_text">TripleTen</p>
          </a>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/EEliason1/"
            className="navigation__react-link"
            target="_blank"
          >
            <img
              src={githubIcon}
              alt="github icon"
              className="footer__link footer__link_icon"
            />
          </a>

          <a
            href="https://www.facebook.com/tripleten.tech/"
            className="navigation__react-link"
            target="_blank"
          >
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="footer__link footer__link_icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
