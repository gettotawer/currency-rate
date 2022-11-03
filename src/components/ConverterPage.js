import React from 'react';
import Input from './Input';
import ResultPopup from './ResultPopup';
import api from '../utils/api';

function ConverterPage(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOkInfo, setIsOkInfo] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [popupInfo, setPopupInfo] = React.useState({});

    function handleInputValueChange(e){
        setInputValue(e.target.value);
    }

    function handleKeyDown(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            const arrayFromInput = inputValue.split(' ');
            api.getConvertation(arrayFromInput[1],[arrayFromInput[3]])
                .then(res => {
                    if(res.success){
                        setIsOkInfo(true);
                        let base = res.base.toUpperCase();
                        let ammount = Number(arrayFromInput[0]) * res.rates[arrayFromInput[3].toUpperCase()];
                        let symbols = arrayFromInput[3].toUpperCase();
                        setPopupInfo({
                            baseAmmount: arrayFromInput[0],
                            base,
                            ammount,
                            symbols
                        });
                        return handleOpenPopup();
                    }
                    return Promise.reject(`Ошибка: ${res.error.type}`);
                }).catch(err => {
                    setIsOkInfo(false);
                    handleOpenPopup();
                });
        }
    }

    function handleOpenPopup(){
      setIsOpen(true);
    }
  
    function handelClosePopup(){
      setIsOpen(false);
    }

    return (
      <section className='converter'>
        <h1 className='converter__title'>Страница конвертации курса одной валюты к другой</h1>
        <p className='converter__instruction'>Вводить запрос необходимо в соответствии с инструкцией: <strong className='converter__highlight'>15 usd in rub</strong>. После ввода запроса нажать Enter</p>
        <Input handleInputValueChange={handleInputValueChange} onEnterDown={handleKeyDown} inputValue={inputValue}/>
        <ResultPopup isOpen={isOpen} isOkInfo={isOkInfo} onClose={handelClosePopup} popupInfo={popupInfo}/>
      </section>
    );
  }
  
  export default ConverterPage;