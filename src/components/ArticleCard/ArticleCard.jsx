import "./ArticleCard.css";

function ArticleCard({ article, isLoggedIn }) {
  return (
    <li className="card">
      <div className="card__save-icon">
        {isLoggedIn ? (
          <></>
        ) : (
          <button className="card__signin-button">
            Sign in to save articles
          </button>
        )}
      </div>
      <img src={article.image} alt={article.title} className="card__image" />
      <div className="card__content">
        <h3 className="card__date">{article.publishDate}</h3>
        <h2 className="card__title">{article.title}</h2>
        <p className="card__body">{article.body}</p>
        <h3 className="card__publisher">{article.publisher}</h3>
      </div>
    </li>
  );
}

export default ArticleCard;
