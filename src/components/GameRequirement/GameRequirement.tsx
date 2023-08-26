import React from "react";
import "./GameRequirement.css";
import {IPropsReq} from "../../types/typesForProps";

function GameRequirement(props: IPropsReq) {
    return(
        <li className="requirement">
            <h2 className="requirement__name">{props.name}</h2>
            <p className="requirement__description">{props.description}</p>
        </li>
    )
}

export default GameRequirement;
