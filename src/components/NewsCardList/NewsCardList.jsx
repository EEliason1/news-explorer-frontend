import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  isLoggedIn,
  handleSignInClick,
  handleSaveClick,
  handleDeleteClick,
}) {
  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        {articles?.map((article) => {
          return (
            <NewsCard
              key={article._id}
              article={article}
              isLoggedIn={isLoggedIn}
              handleSignInClick={handleSignInClick}
              handleSaveClick={handleSaveClick}
              handleDeleteClick={handleDeleteClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default NewsCardList;
