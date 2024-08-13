import "./Main.css";
import ArticleCard from "../ArticleCard/ArticleCard";

function Main({ articles }) {
  return (
    <main className="main">
      <section className="cards">
        <ul className="cards__list">
          {articles?.map((article) => {
            return <ArticleCard key={article._id} article={article} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
