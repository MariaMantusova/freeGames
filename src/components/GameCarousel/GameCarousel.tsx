import React from "react";
import {Carousel} from 'antd';
import {IPropsCarousel} from "../../interfaces/interfacesForProps";

function GameCarousel(props: IPropsCarousel) {
    return(
        <Carousel autoplay={true} style={{width: "70vw", marginTop: "40px", marginBottom: "40px",}}>
            {props.photos.map((item) => (
                <img src={item.image} alt="Скриншот из игры" key={item.id}/>
            ))}
        </Carousel>
    )
}

export default GameCarousel;
