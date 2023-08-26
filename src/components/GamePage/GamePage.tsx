import React from "react";
import LayoutPage from "../LayoutPage/LayoutPage";
import { Typography } from 'antd';
import GameInfoBlock from "../GameInfoBlock/GameInfoBlock";
import GameCarousel from "../GameCarousel/GameCarousel";
import GameRequirements from "../GameRequirements/GameRequirements";

interface IGame {
    "id": number,
    "title": string,
    "thumbnail": string,
    "short_description": string,
    "game_url": string,
    "genre": string,
    "platform": string,
    "publisher": string,
    "developer": string,
    "release_date": string,
    "freetogame_profile_url": string
    "screenshots": {
        "id": number,
        "image": string
    }[],
    "minimum_system_requirements"?: {
        "os": string,
        "processor":  string,
        "memory":  string,
        "graphics":  string,
        "storage":  string,
    },
}

const game: IGame =
    {
        "id": 118,
        "title": "Starbreak",
        "thumbnail": "https://www.freetogame.com/g/118/thumbnail.jpg",
        "short_description": "A Roguelike MMORPG with MetroidVania-style platformer \r\ngameplay! Castlevania and Metroid fans will \r\nlove this game! ",
        "game_url": "https://www.freetogame.com/open/starbreak",
        "genre": "MMORPG",
        "platform": "PC (Windows), Web Browser",
        "publisher": "Crunchy Games",
        "developer": "Crunchy Games",
        "release_date": "2016-05-10",
        "freetogame_profile_url": "https://www.freetogame.com/starbreak",
        "screenshots": [
            {
                "id": 1124,
                "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg"
            },
            {
                "id": 1125,
                "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg"
            },
            {
                "id": 1126,
                "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg"
            },
            {
                "id": 1127,
                "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg"
            }
        ],
        "minimum_system_requirements": {
            "os": "Windows 7, 8, 8.1, 10 (64 bit only)",
            "processor": "Intel i5 Quad-Core",
            "memory": " 6 GB RAM",
            "graphics": "nVidia GeForce GTX 280 series or higher",
            "storage": "20 GB available space"
        },
    }


function GamePage() {
    return(
        <LayoutPage>
            <GameInfoBlock developer={game.developer} publisher={game.publisher} category={game.genre}
                           image={game.thumbnail} date={game.release_date} title={game.title} photos={game.screenshots}
                           requirements={game.minimum_system_requirements}
            />
            <GameCarousel photos={game.screenshots}/>
            <GameRequirements requirements={game.minimum_system_requirements}/>
        </LayoutPage>
    )
}

export default GamePage;
