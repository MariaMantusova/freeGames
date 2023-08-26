import React from "react";
import {Card} from 'antd';
import {IGameProps} from "../../types/typesForProps";

const { Meta } = Card;

function GameItem(props: IGameProps) {
    return(
        <Card
            hoverable
            style={{ width: 300, display: "flex", flexDirection: "column", margin: 0}}
            cover={<img alt={props.title} src={props.image} />}
        >
            <Meta title={props.title} description={`Жанр: ${props.category}`} />
            <Meta description={`Дата релиза: ${props.date.split("-").reverse().join(".")}`} />
            <Meta description={`Издатель: ${props.publisher}`} />
        </Card>
    )
}

export default GameItem;
