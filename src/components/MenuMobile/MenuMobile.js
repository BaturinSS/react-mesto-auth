import React from "react";
import './MenuMobile.css';

function MenuMobile({ email }) {
  return (
    <nav className="menu">
      <p className="menu__email">{email}</p>
      <a className="menu__link-entry" href="#" target="_blank">Войти</a>
    </nav>
  )
}

export default MenuMobile;