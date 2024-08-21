import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ isLoggedIn, handleSignInClick, handleSignOutClick }) {
  return (
    <header className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        handleSignOutClick={handleSignOutClick}
      />
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <h2 className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
