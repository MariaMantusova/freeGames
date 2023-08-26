import React from "react";
import "./MainPage.css";
import GamesList from "../GamesList/GamesList";
import LayoutPage from "../LayoutPage/LayoutPage";
import RadioGroupList from "../RadioGroupsList/RadioGroupsList";

function MainPage() {
    return(
        <LayoutPage>
            <RadioGroupList/>
            <GamesList/>
        </LayoutPage>
    )
}

export default MainPage;
