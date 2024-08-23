import "./Navigation.css";
import NavigationLoggedIn from "../NavigationLoggedIn/NavigationLoggedIn";
import NavigationLoggedOut from "../NavigationLoggedOut/NavigationLoggedOut";
import { Link, useLocation } from "react-router-dom";

function Navigation({
  isLoggedIn,
  handleSignInClick,
  handleSignOutClick,
  handleHamburgerClick,
}) {
  const { pathname } = useLocation();

  return (
    <div className={`navigation ${pathname === "/saved-news" && "saved-news"}`}>
      <Link to="/" className="react__link">
        <div
          className={`navigation__title ${
            pathname === "/saved-news" && "saved-news"
          }`}
        >
          NewsExplorer
        </div>
      </Link>
      <button
        className={`navigation__hamburger ${
          pathname === "/saved-news" && "saved-news"
        }`}
        type="button"
        onClick={handleHamburgerClick}
      ></button>
      <div className="navigation__links">
        <Link to="/" className="react__link">
          <button
            className={`navigation__link ${
              pathname === "/" ? "home" : "saved-news"
            }`}
            type="button"
          >
            Home
          </button>
        </Link>
        {isLoggedIn ? (
          <NavigationLoggedIn handleSignOutClick={handleSignOutClick} />
        ) : (
          <NavigationLoggedOut handleSignInClick={handleSignInClick} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
