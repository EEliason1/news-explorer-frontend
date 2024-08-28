import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";

function SavedNewsHeader({
  isLoggedIn,
  handleSignOutClick,
  articles,
  handleHamburgerClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const keywords = [];

  for (let i = 0; i < articles.length; i++) {
    keywords.push(articles[i].q);
  }

  const uniqueKeywords = Array.from(new Set(keywords));

  const additionalKeywords = uniqueKeywords.length - 2;

  const keywordPhrase = `${uniqueKeywords[0]}
  ${
    uniqueKeywords.length > 1
      ? `${uniqueKeywords.length === 2 ? "and" : ","} ${uniqueKeywords[1]}`
      : ""
  }
  ${
    uniqueKeywords.length > 2
      ? `, and ${additionalKeywords} ${
          uniqueKeywords.length === 3 ? "other" : "others"
        }`
      : ""
  } `;

  return (
    <header className="saved-news-header">
      <Navigation
        isLoggedIn={isLoggedIn}
        handleSignOutClick={handleSignOutClick}
        handleHamburgerClick={handleHamburgerClick}
      />
      <div className="saved-news-header__content">
        <h1 className="saved-news-header__title">Saved articles</h1>
        <div className="saved-news-header__information">
          <h3 className="saved-news-header__quantity">
            {currentUser.username}, you have {articles.length} saved{" "}
            {articles.length === 1 ? "article" : "articles"}
          </h3>
          <p className="saved-news-header__keywords">
            By keywords:{" "}
            <span className="saved-news-header__keyword-list">
              {uniqueKeywords.length !== 0
                ? keywordPhrase
                : "No saved articles"}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
