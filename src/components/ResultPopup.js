import React from "react";

function ResultPopup(props){

    return(
        <div className={`popup ${props.isOpen && "popup_opened"}`}>
            <div className={`popup__content`}>
                {!props.isOkInfo ? <p className="popup__text">Что-то пошло не так. Возможно, ваш запрос не соответствует инструкции или выбранной вами валюты нет в данном API</p> : <p className="popup__text">{`${props.popupInfo.baseAmmount} ${props.popupInfo.base} = ${props.popupInfo.ammount} ${props.popupInfo.symbols}`}</p>}
                <button name="closeButton" type="button" className="popup__close-button" onClick={props.onClose}></button>
            </div>
        </div>
    )
}

export default ResultPopup;