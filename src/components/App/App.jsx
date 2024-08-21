import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignUpConfirmModal from "../SignUpConfirmModal/SignUpConfirmModal";

import { getArticles } from "../../utils/api";
import { signin, signup, checktoken } from "../../utils/auth";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "Testing",
    email: "",
    _id: "",
    __v: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignInClick = () => {
    openModal("sign-in");
  };

  const handleSignUpClick = () => {
    openModal("sign-up");
  };

  const handleSignIn = (userInfo) => {
    setIsLoading(true);
    signin(userInfo)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignUp = (newUserInfo) => {
    setIsLoading(true);
    signup(newUserInfo)
      .then(() => {
        closeActiveModal();
        openModal("sign-up-confirm");
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  const handleSaveClick = (article) => {
    console.log(article);
  };

  const handleDeleteClick = (article) => {
    console.log(article);
  };

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checktoken(token)
        .then((res) => {
          setIsLoggedIn(true);
          // setCurrentUser(res);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App__content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header
                    isLoggedIn={isLoggedIn}
                    handleSignInClick={handleSignInClick}
                    handleSignOutClick={handleSignOutClick}
                  />
                  <Main
                    articles={articles}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    isActiveSearch={isActiveSearch}
                    handleSignInClick={handleSignInClick}
                    handleSaveClick={handleSaveClick}
                  />
                </div>
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    isLoggedIn={isLoggedIn}
                    articles={articles}
                    handleSignInClick={handleSignInClick}
                    handleSignOutClick={handleSignOutClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />

          <SignInModal
            isOpen={activeModal === "sign-in"}
            handleSignUpClick={handleSignUpClick}
            handleCloseClick={closeActiveModal}
            onSignIn={handleSignIn}
          />
          <SignUpModal
            isOpen={activeModal === "sign-up"}
            handleSignInClick={handleSignInClick}
            handleCloseClick={closeActiveModal}
            onSignUp={handleSignUp}
          />
          <SignUpConfirmModal
            isOpen={activeModal === "sign-up-confirm"}
            handleSignInClick={handleSignInClick}
            handleCloseClick={closeActiveModal}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
