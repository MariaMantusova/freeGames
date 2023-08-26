import React from "react";
import "./Preloader.css";

function Preloader() {
    const preloader: string = require("../../images/preloader.svg").default;

    return(
        <section className="preloader">
            <img src={preloader} alt="Идет загрузка страницы"/>
        </section>
    )
}

export default Preloader;
