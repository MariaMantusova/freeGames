import React, {useEffect, useState} from "react";
import GamesList from "../../components/GamesList/GamesList";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import Preloader from "../../components/Preloader/Preloader";
import {gameAPI} from "../../store/games/games.api";
import {TFetchGamesParams} from "../../types/typesMain";
import SelectsList from "../../components/SelectsList/SelectsList";
import Error from "../../components/Error/Error";

function MainPage() {
    const [params, setParams] = useState<TFetchGamesParams>({});
    const [errorMessage, setErrorMessage] = useState("");
    const {
        data: games,
        isError,
        isLoading,
    } = gameAPI.useFetchGamesQuery(params);

    useEffect(() => {
        isError ? setErrorMessage("Произошла ошибка при загрузке игр. " +
            "Обновите страницу.") : setErrorMessage("")
    }, [isError])

    return (
        <LayoutPage>
            <SelectsList setParams={setParams} />
            {isLoading ?
                <Preloader/> : Array.isArray(games) ?
                    <GamesList products={games}/> :
                    isError ?
                        <Error message={errorMessage}/> :
                        <></>}
        </LayoutPage>
    )
}

export default MainPage;
