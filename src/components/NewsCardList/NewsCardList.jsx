import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  savedNews,
  isLoggedIn,
  handleSignInClick,
  handleSaveClick,
  handleDeleteClick,
  visibleResults,
}) {
  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        {articles.slice(0, visibleResults).map((article) => {
          return (
            <NewsCard
              key={article.publishedAt}
              article={article}
              isLoggedIn={isLoggedIn}
              handleSignInClick={handleSignInClick}
              handleSaveClick={handleSaveClick}
              handleDeleteClick={handleDeleteClick}
              savedNews={savedNews}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default NewsCardList;
