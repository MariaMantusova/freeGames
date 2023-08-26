import React from "react";
import "./GameInfoBlock.css";
import {Image, Typography} from 'antd';
import GameInfoList from "../GameInfoList/GameInfoList";
import GameCarousel from "../GameCarousel/GameCarousel";
import GameRequirements from "../GameRequirements/GameRequirements";
import LayoutPage from "../LayoutPage/LayoutPage";

const { Title } = Typography;

interface IPropsGameInfo {
    category: string
    date: string
    publisher: string
    developer: string
    image: string
    title: string
    photos: {
        "id": number,
        "image": string
    }[]
    "requirements"?: {
        "os": string,
        "processor":  string,
        "memory":  string,
        "graphics":  string,
        "storage":  string,
    },
}

function GameInfoBlock(props: IPropsGameInfo) {
    return(
        <div className="game-info-block">
            <Image width={600} src={props.image} alt={props.title}/>
            <div className="game-info-block__container">
                <Title style={{color: "#aaa", alignSelf: "center", marginBottom: "40px", marginTop: "0"}}>{props.title}</Title>
                <GameInfoList date={props.date} category={props.category}
                              publisher={props.publisher} developer={props.developer}/>
            </div>
        </div>
    )
}

export default GameInfoBlock;
