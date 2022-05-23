import React from "react";
import './InformMessagePopup.css';
import cross from '../../images/image-cross.svg';
import ok from '../../images/informMessagePopup-img/ok_message.svg'
import error from '../../images/informMessagePopup-img/error_message.svg'

function InformMessagePopup({
  // isOpen,
}) {
  const isOpen = true;

  return (
    <div className={`popup popup_type_inform-message ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close" type="button">
          <img className="popup__image-cross" src={cross} alt="иконка" />
        </button>
        <img className="popup__image-symbol" src={false ? ok : error} alt={true ? 'символ подтверждения' : 'символ ошибки'} />
        <p className='popup__message'>{false ? 'Вы успешно зарегистрировались!' : 'Что - то пошло не так! Попробуйте ещё раз.'}</p>
      </div>
    </div>
  )
}

export default InformMessagePopup;