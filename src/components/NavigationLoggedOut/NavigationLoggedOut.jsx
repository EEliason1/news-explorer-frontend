import "./NavigationLoggedOut.css";

function NavigationLoggedOut({ handleSignInClick }) {
  return (
    <button
      className="navigation__button navigation__button_sign-in"
      type="button"
      onClick={handleSignInClick}
    >
      Sign In
    </button>
  );
}

export default NavigationLoggedOut;
