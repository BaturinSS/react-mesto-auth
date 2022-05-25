import React, { useState } from "react";
import './Header.css';
import logo from '../../logo.svg';
import MenuMobile from "../MenuMobile/MenuMobile";
import cross from '../../images/image-cross.svg';

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
        <img
          className="header__close-menu"
          src={cross}
          alt="символ закрыть"
          onClick={openedMenuMobile}
          style={isOpenMenuMobile ? { displey: "block" } : { display: "none" }}
        />
        <div
          className="header__menu"
          onClick={openedMenuMobile}
          style={!isOpenMenuMobile ? { displey: "block" } : { display: "none" }}
        >
          <div className="header__menu-img"></div>
          <div className="header__menu-img"></div>
          <div className="header__menu-img"></div>
        </div>
      </div>
    </>
  )
}

export default Header;