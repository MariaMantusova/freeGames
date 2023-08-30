import React from "react";
import {Link} from "react-router-dom";
import {Image} from "antd";

function HeaderLogo() {
    return (
        <>
            <Link to="/">
                <Image src="https://www.freetogame.com/assets/images/freetogame-logo.png" alt="Логотип сайта"
                       preview={false}
                       width={165} height={45} style={{cursor: "pointer"}}
                />
            </Link>
        </>
    )
}

export default HeaderLogo;
