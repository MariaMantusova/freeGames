import React from "react";
import GameRequirement from "../GameRequirement/GameRequirement";
import "./GameRequirements.css";
import {IPropsRequirements} from "../../interfaces/interfacesForProps";

function GameRequirements(props: IPropsRequirements) {
    return (
        <>
            <h2 className="requirements__title">Минимальные системные требования</h2>
            <ul className="requirements">
                <GameRequirement description={props.requirements?.os || "Информации не найдено"}
                                 name="Операционная система"/>
                <GameRequirement description={props.requirements?.processor || "Информации не найдено"}
                                 name="Процессор"/>
                <GameRequirement description={props.requirements?.memory || "Информации не найдено"}
                                 name="Оперативная память"/>
                <GameRequirement description={props.requirements?.storage || "Информации не найдено"}
                                 name="Места на диске"/>
                <GameRequirement description={props.requirements?.graphics || "Информации не найдено"}
                                 name="Видеокарта"/>
            </ul>
        </>
    )
}

export default GameRequirements;
