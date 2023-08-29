import React from "react";
import GameInfoBlock from "../GameInfoBlock/GameInfoBlock";
import GameCarousel from "../GameCarousel/GameCarousel";
import GameRequirements from "../GameRequirements/GameRequirements";
import {IPropsGameDetails} from "../../interfaces/interfacesForProps";

function GameDetails(props: IPropsGameDetails) {
    return(
        <>
            <GameInfoBlock developer={props.details.developer} publisher={props.details.publisher}
                           category={props.details.genre}
                           image={props.details.thumbnail}
                           date={props.details.release_date.split("-").reverse().join(".")}
                           title={props.details.title}/>
            <GameCarousel photos={props.details.screenshots}/>
            <GameRequirements requirements={props.details.minimum_system_requirements}/>
        </>
    )
}

export default GameDetails;
