import React from "react";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import GameInfoBlock from "../../components/GameInfoBlock/GameInfoBlock";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Preloader from "../../components/Preloader/Preloader";
import GameCarousel from "../../components/GameCarousel/GameCarousel";
import GameRequirements from "../../components/GameRequirements/GameRequirements";
import {gameAPI} from "../../store/games/games.api";
import { useParams } from "react-router-dom";

function GamePage() {
    const gameID = useParams().id || '0';

    const {
        data: details,
        error,
        isLoading,
    } = gameAPI.useFetchGameDetailsQuery({ id: gameID! })

    return (
        <LayoutPage>
            {isLoading ? <Preloader/> :
                <>
                <ButtonBack/>
                {details &&
                <>
                    <GameInfoBlock developer={details.developer} publisher={details.publisher} category={details.genre}
                                   image={details.thumbnail} date={details.release_date.split("-").reverse().join(".")} title={details.title}/>
                    <GameCarousel photos={details.screenshots}/>
                    <GameRequirements requirements={details.minimum_system_requirements}/>
                </>}
                </>
            }
        </LayoutPage>
    )
}

export default GamePage;
