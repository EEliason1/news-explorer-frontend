import { request } from "./utils";

const baseURL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=[your_key]";

function getArticles({ q, from, to, pageSize }, apiKey) {
  return request(
    `https://nomoreparties.co/news/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`
  );
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

export { getArticles, saveArticle, deleteArticle };
