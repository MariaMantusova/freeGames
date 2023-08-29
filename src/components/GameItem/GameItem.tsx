import React from "react";
import {Card} from 'antd';
import {IGameProps} from "../../interfaces/interfacesForProps";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

function GameItem(props: IGameProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/game/${props.id}`);
    };

    return(
        <Card onClick={handleClick}
            hoverable
            style={{ maxWidth: "300px", display: "flex", flexDirection: "column", margin: 0}}
            cover={<img alt={props.title} src={props.image} />}
        >
            <Meta title={props.title} description={`Жанр: ${props.category}`} />
            <Meta description={`Дата релиза: ${props.date.split("-").reverse().join(".")}`} />
            <Meta description={`Издатель: ${props.publisher}`} />
        </Card>
    )
}

export default GameItem;
