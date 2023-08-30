import React from "react";
import "./GameInfoBlock.css";
import {Image} from 'antd';
import GameInfoList from "../GameInfoList/GameInfoList";
import {IPropsGameInfoBlock} from "../../interfaces/interfacesForProps";

function GameInfoBlock(props: IPropsGameInfoBlock) {
    return(
        <div className="game-info-block">
            <Image style={{maxWidth: "600px", width: "100%"}} src={props.image} alt={props.title}/>
            <div className="game-info-block__container">
                <h1 className="game-info-block__title">{props.title}</h1>
                <GameInfoList date={props.date} category={props.category}
                              publisher={props.publisher} developer={props.developer}/>
            </div>
        </div>
    )
}

export default GameInfoBlock;
