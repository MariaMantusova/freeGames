import React from "react";
import "./GameInfoBlock.css";
import {Image, Typography} from 'antd';
import GameInfoList from "../GameInfoList/GameInfoList";
import {IPropsGameInfoBlock} from "../../interfaces/interfacesForProps";

const { Title } = Typography;

function GameInfoBlock(props: IPropsGameInfoBlock) {
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
