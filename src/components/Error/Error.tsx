import React from "react";
import "./Error.css";
import {IPropsError} from "../../interfaces/interfacesForProps";

function Error(props: IPropsError) {
    return(
        <div className="error">
            <p className="error__text">{props.message}</p>
        </div>
    )
}

export default Error;
