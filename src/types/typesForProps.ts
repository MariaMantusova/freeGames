import {GamesResponse, IInfoArray} from "./typesMain";

export interface IPropsRadioGroup {
    categoriesArray: IInfoArray[]
}

export interface IPropsRadioBlock {
    children: JSX.Element
    title: string
}

export interface IPropsLayout {
    children: JSX.Element | JSX.Element[];
}

export interface IPropsRequirements {
    requirements?: {
        "os": string,
        "processor": string,
        "memory": string,
        "graphics": string,
        "storage": string,
    },
}

export interface IPropsReq {
    name: string
    description: string | undefined
}

export interface IGameProps {
    image: string
    title: string
    category: string
    date: string
    publisher: string
}

export interface IPropsGameInfo {
    category: string
    date: string
    publisher: string
    developer: string
}

export interface IPropsGameList {
    products: GamesResponse
}

export interface IPropsGameInfoBlock {
    category: string
    date: string
    publisher: string
    developer: string
    image: string
    title: string
}

export interface IPropsCarousel {
    photos: {
        "id": number,
        "image": string
    }[]
}
