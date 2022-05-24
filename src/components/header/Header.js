import React, { useState } from "react";
import './Header.css';
import logo from '../../logo.svg';
import MenuMobile from "../MenuMobile/MenuMobile";

function Header({


}) {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  const refreshPage = () => {
    window.location.reload(true)
  }

  const openedMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  }

  const email = 'email@mail.com';

  return (
    <>
      {isOpenMenuMobile && <MenuMobile email={email} />}
      <div className="header" >
        <img onClick={refreshPage} className="header__logo" src={logo} alt="логотип" />
        <p className="header__email">{email}<a className="header__link-entry" href="#" target="_blank">Войти</a></p>
        <div className="header__menu" onClick={openedMenuMobile}>
          <div className="header__menu-img"></div>
          <div className="header__menu-img"></div>
          <div className="header__menu-img"></div>
        </div>
      </div >
    </>
  )
}

export default Header;