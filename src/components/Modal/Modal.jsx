import "./Modal.css";

function Modal({ name, children, handleCloseClick, isOpen }) {
  return (
    <div className={`modal ${isOpen && `modal_type_${name}`}`}>
      <div className="modal__content">
        {children}
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
}

export default Modal;
