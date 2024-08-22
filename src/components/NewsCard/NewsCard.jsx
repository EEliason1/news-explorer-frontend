import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({
  article,
  savedNews,
  isLoggedIn,
  handleSignInClick,
  handleSaveClick,
  handleDeleteClick,
}) {
  const { pathname } = useLocation();

  const handleSave = () => {
    handleSaveClick(article);
  };

  const handleDelete = () => {
    handleDeleteClick(article);
  };

  const isSaved = savedNews?.some((savedArticle) => savedArticle === article);
  const publishDate = article?.publishedAt;

  return (
    <li className="card">
      <div
        className={`card__keyword ${pathname === "/saved-news" && "visible"}`}
      >
        {article.q}
      </div>
      {isLoggedIn ? (
        <div
          className={`card__save ${pathname === "/" && "card__save_logged-in"}`}
        >
          {pathname === "/saved-news" ? (
            <button
              className="card__delete-button"
              type="button"
              onClick={handleDelete}
            >
              Remove from saved
            </button>
          ) : (
            <></>
          )}
          <button
            className={`card__save-icon ${
              isSaved && pathname === "/" && "saved"
            } ${pathname === "/saved-news" && "delete"}`}
            type="button"
            onClick={pathname === "/" ? handleSave : handleDelete}
          ></button>
        </div>
      ) : (
        <div className="card__save">
          <button
            className="card__signin-button"
            type="button"
            onClick={handleSignInClick}
          >
            Sign in to save articles
          </button>
          <button className="card__save-icon" type="button"></button>
        </div>
      )}
      <a href={article.url} target="_blank" className="card__link">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="card__image"
        />
        <div className="card__content">
          <h3 className="card__date">{publishDate}</h3>
          <h2 className="card__title">{article.title}</h2>
          <p className="card__body">{article.content}</p>
          <h3 className="card__publisher">{article.source.name}</h3>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
