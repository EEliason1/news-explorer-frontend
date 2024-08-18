import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

function SignInModal({
  handleCloseClick,
  isOpen,
  onSignIn,
  handleSignUpClick,
  isLoading,
}) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSignIn(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      name="sign-in"
      titleText="Sign In"
      buttonText={isLoading ? "Signing in..." : "Sign in"}
      secondButtonText={isLoading ? "Loading..." : "Sign up"}
      isOpen={isOpen}
      handleModalChange={handleSignUpClick}
      handleCloseClick={handleCloseClick}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
          name="email"
          minLength="2"
          maxLength="30"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Enter password"
          name="password"
          minLength="2"
          maxLength="30"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;
