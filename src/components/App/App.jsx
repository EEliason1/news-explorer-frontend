import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

import { getArticles } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
    __v: "",
  });
  const [isLoading, setIsLodaing] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch(console.error);
  }, []);

  //For later
  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     checkToken(token)
  //       .then((res) => {
  //         setIsLoggedIn(true);
  //         setCurrentUser(res);
  //       })
  //       .catch(console.error);
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleClickOutsideClose = (evt) => {
      if (evt.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickOutsideClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickOutsideClose);
    };
  }, [activeModal]);

  return (
    <div className="App">
      <div className="App__content">
        <Header isLoggedIn={isLoggedIn} />

        {isActiveSearch ? <Main articles={articles} /> : <></>}

        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
