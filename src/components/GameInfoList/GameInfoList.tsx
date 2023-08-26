import React from "react";
import {List} from "antd";

interface IPropsGameInfo {
    category: string
    date: string
    publisher: string
    developer: string
}

function GameInfoList(props: IPropsGameInfo) {
    const data: string[] = [
        `Жанр: ${props.category}`, `Разработчик: ${props.developer}`, `Издатель: ${props.publisher}`,
        `Дата релиза: ${props.date.split("-").reverse().join(".")}`
    ]

    return (
        <List
            size="small"
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{color: "#aaaaaa", border: "none", fontSize: "17px", paddingLeft: "0"}}>{item}</List.Item>
            )
            }
        />
    )
}

export default GameInfoList;
