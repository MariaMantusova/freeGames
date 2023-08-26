import React from "react";
import GameItem from "../GameItem/GameItem";
import {List} from "antd";
import {IGameForMainPage} from "../../types/typesMain";

const testArray: IGameForMainPage[] = [
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
        "freetogame_profile_url": "https://www.freetogame.com/starbreak"
    },
    {
        "id": 167,
        "title": "Salem",
        "thumbnail": "https://www.freetogame.com/g/167/thumbnail.jpg",
        "short_description": "A free-to-play, sandbox type MMO based on the times and trials of living.",
        "game_url": "https://www.freetogame.com/open/salem",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Mortal Moments",
        "developer": "John Carver",
        "release_date": "2015-06-19",
        "freetogame_profile_url": "https://www.freetogame.com/salem"
    },
    {
        "id": 226,
        "title": "Path of Exile",
        "thumbnail": "https://www.freetogame.com/g/226/thumbnail.jpg",
        "short_description": "A free-to-play massively multiplayer online ARPG in the style of Diablo.",
        "game_url": "https://www.freetogame.com/open/path-of-exile",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Grinding Gear Games",
        "developer": "Grinding Gear Games",
        "release_date": "2013-10-23",
        "freetogame_profile_url": "https://www.freetogame.com/path-of-exile"
    },
    {
        "id": 256,
        "title": "Realm of the Mad God",
        "thumbnail": "https://www.freetogame.com/g/256/thumbnail.jpg",
        "short_description": "A fast paced 2d free to play MMO shooter game with a retro 8-bit style.",
        "game_url": "https://www.freetogame.com/open/realm-mad-god",
        "genre": "MMORPG",
        "platform": "PC (Windows), Web Browser",
        "publisher": "Kabam",
        "developer": "Wild Shadow Studios",
        "release_date": "2012-02-21",
        "freetogame_profile_url": "https://www.freetogame.com/realm-mad-god"
    },
    {
        "id": 307,
        "title": "Shaiya",
        "thumbnail": "https://www.freetogame.com/g/307/thumbnail.jpg",
        "short_description": "A free to play 3D MMORPG similar to World of Warcraft and Lineage 2.",
        "game_url": "https://www.freetogame.com/open/shaiya",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Aeria Games",
        "developer": "Aeria Games",
        "release_date": "2007-12-24",
        "freetogame_profile_url": "https://www.freetogame.com/shaiya"
    },
    {
        "id": 307,
        "title": "Shaiya",
        "thumbnail": "https://www.freetogame.com/g/307/thumbnail.jpg",
        "short_description": "A free to play 3D MMORPG similar to World of Warcraft and Lineage 2.",
        "game_url": "https://www.freetogame.com/open/shaiya",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Aeria Games",
        "developer": "Aeria Games",
        "release_date": "2007-12-24",
        "freetogame_profile_url": "https://www.freetogame.com/shaiya"
    }
]

function GamesList() {
    return (
        <>
            <List
                style={{maxWidth: "71vw", margin: "20px auto 40px"}}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 9,
                    align: "center",
                }}
                grid={{
                    gutter: 60,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={testArray}
                renderItem={(item) => (
                    <List.Item
                        style={{maxWidth: "300px", marginTop: "20px"}}
                    >
                        <GameItem title={item.title} image={item.thumbnail} publisher={item.publisher}
                                  category={item.genre}
                                  date={item.release_date}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default GamesList;
