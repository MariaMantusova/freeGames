import React, {useEffect, useState} from "react";
import GamesList from "../../components/GamesList/GamesList";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import Preloader from "../../components/Preloader/Preloader";
import {gameAPI} from "../../store/games/games.api";
import {TFetchGamesParams} from "../../types/typesMain";
import SelectsList from "../../components/SelectsList/SelectsList";

function MainPage() {
    const [params, setParams] = useState<TFetchGamesParams>({});
    const {
        data: games,
        refetch,
        isError,
        error,
        isLoading,
    } = gameAPI.useFetchGamesQuery(params);

    return (
        <LayoutPage>
            <SelectsList setParams={setParams} />
            {isLoading ?
                <Preloader/> : Array.isArray(games) ?
                <GamesList products={games}/> :
                    <span style={{color: "red", height: "50vh"}}>error</span>}

        </LayoutPage>
    )
}

export default MainPage;
