import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({
  article,
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

  return (
    <li className="card">
      <div
        className={`card__keyword ${pathname === "/saved-news" && "visible"}`}
      >
        {article.keyword}
      </div>
      {isLoggedIn ? (
        <div
          className={`card__save ${pathname === "/" && "card__save_logged-in"}`}
        >
          {pathname === "/saved-news" ? (
            <button
              className="card__signin-button"
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
              pathname === "/saved-news" && "delete"
            }`}
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

export default NewsCard;
