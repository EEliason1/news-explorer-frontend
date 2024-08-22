import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({
  name,
  children,
  buttonText,
  secondButtonText,
  titleText,
  handleCloseClick,
  onSubmit,
  handleModalChange,
  isOpen,
}) {
  return (
    <Modal name={name} handleCloseClick={handleCloseClick} isOpen={isOpen}>
      <form action="" className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{titleText}</h2>
        {children}
        <div className="modal__submit-buttons">
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>

          {secondButtonText ? (
            <button
              className="modal__alternate-button"
              type="button"
              onClick={handleModalChange}
            >
              or
              <span className="modal__alternate-text"> {secondButtonText}</span>
            </button>
          ) : (
            <></>
          )}
        </div>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
