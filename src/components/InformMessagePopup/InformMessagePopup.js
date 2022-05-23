import React from "react";
import './InformMessagePopup.css';
import cross from '../../images/image-cross.svg';
import ok from '../../images/informMessagePopup-img/ok_message.svg'
import error from '../../images/informMessagePopup-img/error_message.svg'

function informMessagePopup({
  // isOpen,
  // message,
}) {

  // const message = 'FGHJK';

  return (
    <div className="popup popup_type_inform-message popup_opened">
      {/* ${isOpen && "popup_opened"} */}
      <div className="popup__container">
        <button className="popup__close" type="button">
          <img className="popup__image-cross" src={cross} alt="иконка" />
        </button>
        {/* <img className="popup__image-symbol" src={true ? ok : error} alt={true ? 'символ подтверждения' : 'символ ошибки'} /> */}
        {/* <p className='popup__message'>{message}</p> */}
      </div>
    </div>
  )
}

export default informMessagePopup;