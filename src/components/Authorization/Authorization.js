import React from "react";
import './Authorization.css';

function Authorization({
  title,
  name,
  buttonText,
  isButtonDisabled
}) {
  return (
    <div className={`authorization authorization_type_${name}`}>
      <h1 className="authorization__title">{title}</h1>
      <form
        className={`authorization__form authorization__form_type_${name}`}
        name={`${name}Form`}
        noValidate
      >
        <input
          id={`${name}Email-input`}
          className={`authorization__input authorization__input_${name}-email`}
          required
          placeholder="Email"
          spellCheck="true"
          type="email"
          name={`${name}Email`}
        />
        <span className={`authorization__input-error ${name}Email-input-error`}></span>
        <input
          id={`${name}Password-input`}
          className={`authorization__input authorization__input_${name}-password`}
          required
          placeholder="Пароль"
          spellCheck="true"
          type="password"
          name={`${name}Password`}
          minLength="6"
          maxLength="12"
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
      <p className="authorization__comment">Уже зарегистрированы?<a className="authorization__link-entry" href="#" target="_blank"> Войти</a></p>
    </div>
  )
}

export default Authorization;