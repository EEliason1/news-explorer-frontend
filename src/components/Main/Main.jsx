import "./Main.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main({ articles, isLoggedIn, isLoading, isActiveSearch }) {
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
              <section className="cards">
                <ul className="cards__list">
                  {articles?.map((article) => {
                    return (
                      <ArticleCard
                        key={article._id}
                        article={article}
                        isLoggedIn={isLoggedIn}
                      />
                    );
                  })}
                </ul>
              </section>
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
