import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

function SignUpModal({
  handleCloseClick,
  isOpen,
  onSignUp,
  handleSignInClick,
  isLoading,
  isButtonActive
}) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSignUp(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "", username: "" });
    }
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      name="sign-up"
      titleText="Sign Up"
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      secondButtonText={isLoading ? "Loading..." : "Sign in"}
      isOpen={isOpen}
      handleModalChange={handleSignInClick}
      handleCloseClick={handleCloseClick}
      onSubmit={handleFormSubmit}
      isButtonActive={isButtonActive}
    >
      <label htmlFor="new-email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="new-email"
          placeholder="Enter your email"
          name="email"
          minLength="2"
          maxLength="30"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="new-password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="new-password"
          placeholder="Enter your password"
          name="password"
          minLength="2"
          maxLength="30"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="username"
          placeholder="Enter your username"
          name="username"
          minLength="2"
          maxLength="30"
          value={values.username}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
