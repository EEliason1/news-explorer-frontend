import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SavedNewsHeader({ isLoggedIn, handleSignOutClick }) {
  const currentUser = useContext(CurrentUserContext);
  const savedArticles = 5;

  return (
    <section className="saved-news-header">
      <Navigation
        isLoggedIn={isLoggedIn}
        handleSignOutClick={handleSignOutClick}
      />
      <div className="saved-news-header__content">
        <h2 className="saved-news-header__title">Saved articles</h2>
        <div className="saved-news-header__information">
          <h3 className="saved-news-header__quantity">
            {currentUser.username}, you have {savedArticles} saved articles
          </h3>
          <p className="saved-news-header__keywords">
            By keywords:{" "}
            <span className="saved-news-header__keyword-list">
              Nature, Yellowstone, and 2 others
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
