import {TGamesResponse, TInfoArray} from "../types/typesMain";

export interface IPropsRadioGroup {
    categoriesArray: TInfoArray[]
}

export interface IPropsGameList {
    products: TGamesResponse
}

export interface IPropsLayout {
    children: JSX.Element | JSX.Element[];
}

export interface IPropsRadioBlock {
    children: JSX.Element
    title: string
}

export interface IPropsReq {
    name: string
    description: string | undefined
}

export interface IPropsCarousel {
    photos: {
        "id": number,
        "image": string
    }[]
}

export interface IPropsGameInfo {
    category: string
    date: string
    publisher: string
    developer: string
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

export interface IGameProps {
    image: string
    title: string
    category: string
    date: string
    publisher: string
    id: number
}

export interface IPropsGameInfoBlock {
    category: string
    date: string
    publisher: string
    developer: string
    image: string
    title: string
}
