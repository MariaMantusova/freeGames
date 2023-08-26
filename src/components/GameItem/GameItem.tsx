import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

interface ICameItemProps {
    image: string
    title: string
    category: string
    date: string
    publisher: string
}


function GameItem(props: ICameItemProps) {
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
