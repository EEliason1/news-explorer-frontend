import "./Navigation.css";
import NavigationLoggedIn from "../NavigationLoggedIn/NavigationLoggedIn";
import NavigationLoggedOut from "../NavigationLoggedOut/NavigationLoggedOut";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn, handleSignInClick }) {
  return (
    <div className="navigation">
      <Link to="/" className="navigation__link">
        <div className="navigation__title">NewsExplorer</div>
      </Link>
      <div className="navigation__links">
        <div className="navigation__link">Home</div>
        {isLoggedIn ? (
          <NavigationLoggedIn />
        ) : (
          <NavigationLoggedOut handleSignInClick={handleSignInClick} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
