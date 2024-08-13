import "./ArticleCard.css";

function ArticleCard({ article }) {
  return (
    <li className="card">
      <img src={article.image} alt={article.title} className="card__image" />
    </li>
  );
}

export default ArticleCard;
