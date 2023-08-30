import React from "react";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import {Result} from "antd";

function NotFoundPage() {
    return(
        <LayoutPage>
            <ButtonBack/>
            <Result style={{height: "80vh", display: "flex",
                flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                status="error"
                subTitle="Данной страницы не существует, вернитесь на главную"
            />
        </LayoutPage>
    )
}

export default NotFoundPage;
