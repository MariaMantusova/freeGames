import React from "react";
import GamesList from "../../components/GamesList/GamesList";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import RadioGroupList from "../../components/RadioGroupsList/RadioGroupsList";

function MainPage() {
    return(
        <LayoutPage>
            <RadioGroupList/>
            <GamesList/>
        </LayoutPage>
    )
}

export default MainPage;
