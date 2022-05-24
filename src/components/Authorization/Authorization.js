import React, { useState } from "react";
import './Authorization.css';
import FormValidator from "../FormValidator/FormValidator";

function Authorization({
  title,
  name,
  buttonText,
  isButtonDisabled
}) {
  const { setIsEventInput, setIsOpenForm, isValidForm, isValidInput, isErrorMessage } = FormValidator();

  const { emailErrorMessage = '', passwordErrorMessage = '' } = isErrorMessage;

  const { emailValidInput = true, passwordValidInput = true } = isValidInput;

  const [isEmail, setIsEmail] = useState({});

  const [isPassword, setIsPassword] = useState({});

  function handleEmailChange(event) {
    setIsEventInput(event);
    setIsEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setIsEventInput(event);
    setIsPassword(event.target.value);
  }

  setIsOpenForm(false);

  const isOpen = false;

  return (
    <div className={`authorization authorization_type_${name} ${isOpen && "popup_opened"}`}>
      <h1 className="authorization__title">{title}</h1>
      <form
        className={`authorization__form authorization__form_type_${name} popup__form`}
        name={`${name}Form`}
        noValidate
      >
        <input
          id={`${name}Email-input`}
          className={`authorization__input authorization__input_${name}-email ${!emailValidInput ? "popup__input_type_error" : ''}`}
          required
          placeholder="Email"
          spellCheck="true"
          type="email"
          name='email'
          onChange={handleEmailChange}
        />
        <span className={`authorization__input-error ${name}Email-input-error ${!emailValidInput ? "popup__input_type_error" : ''}`}>{emailErrorMessage}</span>
        <input
          id={`${name}Password-input`}
          className={`authorization__input authorization__input_${name}-password ${!passwordValidInput ? "popup__input_type_error" : ''}`}
          required
          placeholder="Пароль"
          spellCheck="true"
          type="password"
          name='password'
          minLength="6"
          maxLength="12"
          onChange={handlePasswordChange}
        />
        <span className={`authorization__input-error ${name}Password-input-error ${!passwordValidInput ? "popup__input_type_error" : ''}`}>{passwordErrorMessage}</span>
        <button
          className={`authorization__save-button`}
          type="submit"
          disabled={isButtonDisabled || !isValidForm ? true : false}
        >
          {buttonText}
        </button>
      </form>
      <p className="authorization__comment">Уже зарегистрированы?<a className="authorization__link-entry" href="#" target="_blank"> Войти</a></p>
    </div>
  )
}

export default Authorization;