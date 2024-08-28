import "./NavigationLoggedIn.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NavigationLoggedIn({ handleSignOutClick }) {
  const currentUser = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  return (
    <div className="navigation__logged-in">
      <Link to="/saved-news" className="react__link">
        <button
          className={`navigation__link-saved ${
            pathname === "/saved-news" && "saved-news"
          }`}
          type="button"
        >
          Saved articles
        </button>
      </Link>
      <button
        className={`navigation__button navigation__button_sign-out ${
          pathname === "/saved-news" && "saved-news"
        }`}
        type="button"
        onClick={handleSignOutClick}
      >
        <p
          className={`navigation__username ${
            pathname === "/saved-news" && "saved-news"
          }`}
        >
          {currentUser.username}
        </p>
        <div
          className={`navigation__sign-out-image ${
            pathname === "/saved-news" && "saved-news"
          }`}
        ></div>
      </button>
    </div>
  );
}

export default NavigationLoggedIn;
