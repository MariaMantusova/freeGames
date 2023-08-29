import React from "react";
import {Content, Footer, Header} from "antd/es/layout/layout";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import {Layout} from "antd";
import {IPropsLayout} from "../../interfaces/interfacesForProps";

function LayoutPage(props: IPropsLayout) {
    return(
        <Layout>
            <Header style={{display: "flex", justifyContent: "space-between", backgroundColor: "#272b30"}}>
                <HeaderLogo/>
            </Header>
            <Content style={{display: "flex", flexDirection: "column", alignItems: "center",
                backgroundColor: "#272b30"}}>
                {props.children}
            </Content>
            <Footer style={{display: "flex", justifyContent: "center", backgroundColor: "#000", color: "#aaa", textAlign: "center"}}>
                &#169; Тестовое задание выполнено Марией Мантусовой.
            </Footer>
        </Layout>
    )
}

export default LayoutPage;
