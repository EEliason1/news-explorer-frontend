import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignUpConfirmModal from "../SignUpConfirmModal/SignUpConfirmModal";

import { getArticles } from "../../utils/api";
import { signin, signup, checktoken } from "../../utils/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    _id: "",
    __v: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
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
        // localStorage.setItem("jwt", res.token);
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
        <Header isLoggedIn={isLoggedIn} handleSignInClick={handleSignInClick} />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                articles={articles}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                isActiveSearch={isActiveSearch}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
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
  );
}

export default App;
