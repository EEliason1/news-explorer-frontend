import "./NavigationLoggedOut.css";

function NavigationLoggedOut({ handleSignInClick }) {
  return (
    <button
      className="navigation__sign-in-button"
      type="button"
      onClick={handleSignInClick}
    >
      Sign In
    </button>
  );
}

export default NavigationLoggedOut;
