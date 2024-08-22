import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import { useState } from "react";

function Main({
  articles,
  savedNews,
  isLoggedIn,
  isLoading,
  isActiveSearch,
  handleSignInClick,
  handleSaveClick,
}) {
  const [visibleResults, setVisibleResults] = useState(3);

  const showMore = () => {
    setVisibleResults(visibleResults + 3);
  };

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
            <div>
              {articles.length === 0 ? (
                <div className="main__nothing-found">
                  <div className="main__nothing-image"></div>
                  <h2 className="main__nothing-title">Nothing found</h2>
                  <p className="main__nothing-text">
                    Sorry, but nothing matched your search terms.
                  </p>
                </div>
              ) : (
                <div className="main__content">
                  <h2 className="main__title">Search Results</h2>
                  <NewsCardList
                    articles={articles}
                    isLoggedIn={isLoggedIn}
                    handleSignInClick={handleSignInClick}
                    handleSaveClick={handleSaveClick}
                    visibleResults={visibleResults}
                    savedNews={savedNews}
                  />
                  {articles.length > visibleResults ? (
                    <button
                      className="main__show-more-button"
                      type="button"
                      onClick={showMore}
                    >
                      Show more
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              )}
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
