import React from "react";
import "./ButtonBack.css";
import {Link} from "react-router-dom";

function ButtonBack() {
    return(
        <Link to="/" className="button-back">&#10229; На главную страницу</Link>
    )
}

export default ButtonBack;
