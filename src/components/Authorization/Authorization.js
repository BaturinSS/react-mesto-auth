import React, { useState } from "react";
import { Link, Route, withRouter } from 'react-router-dom';
import './Authorization.css';

function Authorization({
  title,
  name,
  buttonText,
  isButtonDisabled,
  setIsButtonDisabled,
  onSubmit,
  isEmail,
  setIsEmail
}) {
  const [isPassword, setIsPassword] = useState({});

  function handleEmailChange(event) {
    setIsEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setIsPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsButtonDisabled(true);
    onSubmit(isPassword, isEmail)
  }
  return (
    <div className={`authorization authorization_type_${name}`}>
      <h1 className="authorization__title">{title}</h1>
      <form
        className={`authorization__form authorization__form_type_${name}`}
        name={`${name}Form`}
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          id={`${name}Email-input`}
          className={`authorization__input authorization__input_${name}-email`}
          required
          placeholder="Email"
          spellCheck="true"
          type="email"
          name='email'
          onChange={handleEmailChange}
          value={isEmail}
        />
        <span className={`authorization__input-error ${name}Email-input-error`}></span>
        <input
          id={`${name}Password-input`}
          className={`authorization__input authorization__input_${name}-password`}
          required
          placeholder="Пароль"
          spellCheck="true"
          type="password"
          name='password'
          minLength="6"
          maxLength="12"
          onChange={handlePasswordChange}
        />
        <span className={`authorization__input-error ${name}Password-input-error`}></span>
        <button
          className={`authorization__save-button`}
          type="submit"
          disabled={isButtonDisabled ? true : false}
        >
          {buttonText}
        </button>
      </form>
      <Route exact path="/sign-up">
        <p className="authorization__comment">Уже зарегистрированы?
          <Link className="authorization__link-entry" to="/sign-in"> Войти</Link>
        </p>
      </Route>
    </div>
  )
}

export default withRouter(Authorization);