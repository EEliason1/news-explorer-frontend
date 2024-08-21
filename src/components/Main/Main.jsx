import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";

function Main({
  articles,
  isLoggedIn,
  isLoading,
  isActiveSearch,
  handleSignInClick,
  handleSaveClick,
}) {
  return (
    <main className="main">
      {isActiveSearch ? (
        <div>
          {isLoading ? (
            <div className="main__searching">
              <Preloader />
              <h3 className="main__search-text">Searching for news...</h3>
            </div>
          ) : (
            <div className="main__content">
              <h2 className="main__title">Search Results</h2>
              <NewsCardList
                articles={articles}
                isLoggedIn={isLoggedIn}
                handleSignInClick={handleSignInClick}
                handleSaveClick={handleSaveClick}
              />
            </div>
          )}
        </div>
      ) : (
        <></>
      )}

      <About />
    </main>
  );
}

export default Main;
