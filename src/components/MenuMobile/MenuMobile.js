import React from "react";
import { Link } from "react-router-dom";
import './MenuMobile.css';

function MenuMobile({ email, handleExit }) {

  return (
    <div className="menu">
      <p className="menu__email">{email}</p>
      <Link className="menu__link-entry" to="/sign-in" onClick={handleExit}>Выйти</Link>
    </div>
  )
}

export default MenuMobile;