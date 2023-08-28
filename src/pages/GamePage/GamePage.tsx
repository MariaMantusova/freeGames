import React, {useState} from "react";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import GameInfoBlock from "../../components/GameInfoBlock/GameInfoBlock";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Preloader from "../../components/Preloader/Preloader";
import { IGameForGamePage } from "../../types/typesMain";
import GameCarousel from "../../components/GameCarousel/GameCarousel";
import GameRequirements from "../../components/GameRequirements/GameRequirements";

function GamePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<IGameForGamePage>()

    return (
        <LayoutPage>
            {isLoading ? <Preloader/> :
                <>
                <ButtonBack/>
                {data &&
                <>
                    <GameInfoBlock developer={data.title} publisher={data.title} category={data.title}
                                   image={data.title} date={data.title} title={data.title}/>
                    <GameCarousel photos={data.screenshots}/>
                    <GameRequirements requirements={data.minimum_system_requirements}/>
                </>}
                </>
            }
        </LayoutPage>
    )
}

export default GamePage;
