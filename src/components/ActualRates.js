import React from "react";
import api from '../utils/api';
import Row from "./Row";

function ActualRates(props){
    const userCurrency = navigator.language.slice(0,2) === "ru" ? "RUB" : "USD";
    const [baseCurrency, setBaseCurrency] = React.useState(userCurrency);
    const [ratesResponse, setRatesResponse] = React.useState([]);

    React.useEffect(()=>{
        fetchCurrency();
    }, [baseCurrency]);

    function fetchCurrency() {
        if(baseCurrency === "USD"){
            api.getConvertation(baseCurrency,[])
                .then((res) => {
                    setRatesResponse(Object.entries(res.rates))
                }).catch(err => console.log(err));
        } else {
            api.getConvertation(baseCurrency,[])
                .then((res) => {
                    setRatesResponse(Object.entries(res.rates))
                }).catch(err => console.log(err));
        }
    }

    function handleChangeCurrency(e) {
        setBaseCurrency(e.target.value);
    }

    function handleButtonClick (e) {
        e.preventDefault();
        fetchCurrency();
    }

    return(
        <section className="actualRates">
            <h1 className="actualRates__title">Выберите базовую валюту</h1>
            <form className="actualRates__form">
                <select value={baseCurrency} onChange={handleChangeCurrency}>
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                </select>
                <button className="actualRates__button" onClick={handleButtonClick}>Обновить</button>
            </form>
            <div className="actualRates__container">
                {ratesResponse.map((i) => (
                    <Row key={i[0]} currency={i[0]} rate={i[1]}/>
                ))}
            </div>
        </section>
    )
}

export default ActualRates;