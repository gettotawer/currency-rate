import React from "react";
import { Link } from 'react-router-dom';

function Header(props){

    return(
        <section className="header">
            <h3 className="header__title">Тестовое задание</h3>
            <Link className={"header__link"} to={props.link}>{props.name}</Link>
        </section>
    )
}

export default Header
