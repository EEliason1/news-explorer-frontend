import { prelimArticles } from "./constants";

function getArticles() {
  return new Promise((resolve, reject) => {
    resolve(prelimArticles);
  });
}

function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve(article);
  });
}

function deleteArticle(article) {
    return new Promise((resolve, reject) => {
        resolve(article);
      });
}

export { getArticles, saveArticle, deleteArticle}