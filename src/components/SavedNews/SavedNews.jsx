import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  isLoggedIn,
  articles,
  handleSignInClick,
  handleSignOutClick,
  handleDeleteClick,
  handleHamburgerClick,
}) {
  return (
    <div className="saved-news">
      <div className="saved-news__content">
        <SavedNewsHeader
          isLoggedIn={isLoggedIn}
          handleSignOutClick={handleSignOutClick}
          articles={articles}
          handleHamburgerClick={handleHamburgerClick}
        />
        <NewsCardList
          articles={articles}
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}

export default SavedNews;
