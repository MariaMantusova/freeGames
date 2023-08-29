import React, {useEffect, useState} from "react";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import GameInfoBlock from "../../components/GameInfoBlock/GameInfoBlock";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Preloader from "../../components/Preloader/Preloader";
import GameCarousel from "../../components/GameCarousel/GameCarousel";
import GameRequirements from "../../components/GameRequirements/GameRequirements";
import {gameAPI} from "../../store/games/games.api";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";

function GamePage() {
    const [errorMessage, setErrorMessage] = useState("");
    const gameID =  useParams().id || '0';
    const {
        data: details,
        error,
        isError,
        isLoading,
    } = gameAPI.useFetchGameDetailsQuery({ id: gameID! })

    useEffect(() => {
        isError ? setErrorMessage("Не удалось найти информацию об игре.") : setErrorMessage("");
    }, [isError])

    return (
        <LayoutPage>
                <ButtonBack/>
                {isLoading ? <Preloader/> :
                    details ?
                    <>
                        <GameInfoBlock developer={details.developer} publisher={details.publisher}
                                       category={details.genre}
                                       image={details.thumbnail}
                                       date={details.release_date.split("-").reverse().join(".")}
                                       title={details.title}/>
                        <GameCarousel photos={details.screenshots}/>
                        <GameRequirements requirements={details.minimum_system_requirements}/>
                    </> :
                    isError ?
                        <Error message={errorMessage}/> :
                        <></>}
        </LayoutPage>
    )
}

export default GamePage;
