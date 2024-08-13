import "./Navigation.css";
import NavigationLoggedIn from "../NavigationLoggedIn/NavigationLoggedIn";
import NavigationLoggedOut from "../NavigationLoggedOut/NavigationLoggedOut";

function Navigation({ isLoggedIn }) {
  return (
    <div className="navigation">
      <div className="navigation__title">NewsExplorer</div>
      <div className="navigation__links">
        <div className="navigation__link">Home</div>
        {isLoggedIn ? <NavigationLoggedIn /> : <NavigationLoggedOut />}
      </div>
    </div>
  );
}

export default Navigation;
