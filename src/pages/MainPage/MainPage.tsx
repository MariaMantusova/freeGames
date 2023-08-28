import React, {useState} from "react";
import GamesList from "../../components/GamesList/GamesList";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import RadioGroupList from "../../components/RadioGroupsList/RadioGroupsList";
import Preloader from "../../components/Preloader/Preloader";
import {gameAPI} from "../../store/games/games.api";
import {TFetchGamesParams} from "../../types/typesMain";

function MainPage() {
    const [params, setParams] = useState<TFetchGamesParams>({});

    const {
        data: games,
        refetch,
        error,
        isLoading,
    } = gameAPI.useFetchGamesQuery(params);

    return (
        <LayoutPage>
            <RadioGroupList/>
            {isLoading ?
                <Preloader/> : Array.isArray(games) ?
                <GamesList products={games}/> :
                    <span style={{color: "red", height: "50vh"}}>error</span>}

        </LayoutPage>
    )
}

export default MainPage;
