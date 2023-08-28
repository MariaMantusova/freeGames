import React, {useState} from "react";
import GamesList from "../../components/GamesList/GamesList";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import RadioGroupList from "../../components/RadioGroupsList/RadioGroupsList";
import Preloader from "../../components/Preloader/Preloader";

function MainPage() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LayoutPage>
            <RadioGroupList/>
            {isLoading ?
                <Preloader/> : (isLoading !== undefined && !isLoading) ?
                <GamesList products={[]}/> :
                    <span style={{color: "red", height: "50vh"}}>error</span>}

        </LayoutPage>
    )
}

export default MainPage;
