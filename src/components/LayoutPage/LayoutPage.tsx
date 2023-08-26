import React from "react";
import {Content, Footer, Header} from "antd/es/layout/layout";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import {Layout} from "antd";

interface IPropsLayout {
    children: JSX.Element | JSX.Element[];
}

function LayoutPage(props: IPropsLayout) {
    return(
        <Layout>
            <Header style={{display: "flex", justifyContent: "space-between", backgroundColor: "#272b30"}}>
                <HeaderLogo/>
            </Header>
            <Content style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#272b30"}}>
                {props.children}
            </Content>
            <Footer style={{display: "flex", justifyContent: "center", backgroundColor: "#000", color: "#aaa"}}>
                &#169; Тестовое задание выполнено Марией Мантусовой.
            </Footer>
        </Layout>
    )
}

export default LayoutPage;
