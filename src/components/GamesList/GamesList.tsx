import React from "react";
import GameItem from "../GameItem/GameItem";
import {List} from "antd";
import {IPropsGameList} from "../../interfaces/interfacesForProps";

function GamesList(props: IPropsGameList) {
    return (
        <>
            <List
                style={{maxWidth: "70vw", width: "100%", margin: "20px auto 40px", gap: "30px"}}
                pagination={{
                    pageSize: 12,
                    align: "center",
                    showSizeChanger: false,
                }}
                grid={{
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={props.products}
                renderItem={(item) => (
                    <List.Item
                        style={{maxWidth: "300px", marginTop: "20px"}}>
                        <GameItem title={item.title} image={item.thumbnail} publisher={item.publisher}
                                  category={item.genre} id={item.id}
                                  date={item.release_date}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default GamesList;
