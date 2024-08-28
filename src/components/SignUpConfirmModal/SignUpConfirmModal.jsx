import "./SignUpConfirmModal.css";
import Modal from "../Modal/Modal";

function SignUpConfirmModal({ isOpen, handleCloseClick, handleSignInClick }) {
  return (
    <Modal
      name="sign-up-confirm"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
    >
      <div className="modal__confirm-content">
        <h2 className="modal__title modal__title_confirm">
          Registration successfully completed!
        </h2>
        <button
          className="modal__sign-in-button"
          type="button"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      </div>
    </Modal>
  );
}

export default SignUpConfirmModal;
