import React from "react";
import "./MainPage.css";
import {Layout} from "antd";
import {Content, Footer, Header } from "antd/es/layout/layout";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import ContentBlock from "../ContentBlock/ContentBlock";
import GamesList from "../GamesList/GamesList";

function MainPage() {
    return(
        <Layout>
            <Header style={{display: "flex", justifyContent: "space-between", backgroundColor: "#272b30"}}>
                <HeaderLogo/>
            </Header>
            <Content style={{display: "flex", flexDirection: "column", backgroundColor: "#272b30"}}>
                <ContentBlock/>
                <GamesList/>
            </Content>
            <Footer style={{display: "flex", justifyContent: "center", backgroundColor: "#272b30", color: "#aaa"}}>
                &#169; Тестовое задание выполнено Марией Мантусовой.
            </Footer>
        </Layout>
    )
}

export default MainPage;
