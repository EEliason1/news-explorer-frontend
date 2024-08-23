import "./MobileNavMenu.css";
import Modal from "../Modal/Modal";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function MobileNavMenu({
  handleCloseClick,
  isOpen,
  handleSignInClick,
  isLoggedIn,
  handleSignOutClick,
  closeActiveModal,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  return (
    <Modal name="hamburger" handleCloseClick={handleCloseClick} isOpen={isOpen}>
      <div
        className="modal__hamburger"
      >
        <button
          className="modal__hamburger-close-button"
          type="button"
          onClick={handleCloseClick}
        />
        <div className="modal__hamburger-header">
          <Link to="/" className="react__link">
            <div className="navigation__title">NewsExplorer</div>
          </Link>
        </div>
        <div className="modal__hamburger-nav">
          <Link to="/" className="react__link">
            <button
              className="navigation__link"
              type="button"
              onClick={closeActiveModal}
            >
              Home
            </button>
          </Link>
          {isLoggedIn ? (
            <div className="modal__hamburger-logged-in">
              <Link to="/saved-news" className="react__link">
                <button
                  className="navigation__link-saved"
                  type="button"
                  onClick={closeActiveModal}
                >
                  Saved articles
                </button>
              </Link>
              <button
                className="modal__sign-out-hamburger"
                type="button"
                onClick={handleSignOutClick}
              >
                <p className="navigation__username">{currentUser.username}</p>
                <div className="navigation__sign-out-image"></div>
              </button>
            </div>
          ) : (
            <button
              className="modal__sign-in-hamburger"
              type="button"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default MobileNavMenu;
