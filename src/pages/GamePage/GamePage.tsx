import React, {useEffect, useState} from "react";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Preloader from "../../components/Preloader/Preloader";
import {gameAPI} from "../../store/games/games.api";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";
import GameDetails from "../../components/GameDetails/GameDetails";

function GamePage() {
    const [errorMessage, setErrorMessage] = useState("");
    const gameID = useParams().id || '0';
    const cashedDetails = localStorage.getItem(gameID);
    const cashedGame = cashedDetails ? JSON.parse(cashedDetails) : null;
    const invalidTime = 5 * 60 * 1000;

    function settingGameInfo() {
        localStorage.setItem(gameID, JSON.stringify({
            addingTime: Date.now(),
            gameDetails: details,
        }))
    }

    function isCashedGameValid(): boolean {
        if (cashedGame && (Date.now() - cashedGame.addingTime) <= invalidTime) {
            return true;
        }

        localStorage.removeItem(gameID);
        return false;
    }

    const {
        data: details,
        isError,
        isLoading,
    } = gameAPI.useFetchGameDetailsQuery({ id: gameID! }, {skip: isCashedGameValid()})

    useEffect(() => {
        if (details) {
            settingGameInfo();
        }
    }, [details, gameID])

    useEffect(() => {
        isError ? setErrorMessage("Не удалось найти информацию об игре.") : setErrorMessage("");
    }, [isError])

    return (
        <LayoutPage>
                <ButtonBack/>
                {isLoading ? <Preloader/> :
                    details || (cashedGame !== null) ?
                        <GameDetails details={details || cashedGame.gameDetails}/>
                     :
                    isError ?
                        <Error message={errorMessage}/> :
                        <></>}
        </LayoutPage>
    )
}

export default GamePage;
