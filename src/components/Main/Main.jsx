import "./Main.css";
import ArticleCard from "../ArticleCard/ArticleCard";

function Main({ articles, isLoggedIn }) {
  return (
    <main className="main">
      <h2 className="main__title">Search Results</h2>
      <section className="cards">
        <ul className="cards__list">
          {articles?.map((article) => {
            return <ArticleCard key={article._id} article={article} isLoggedIn={isLoggedIn}/>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
