import React from "react";
import {TFetchGamesParams, TGamesResponse, TInfoArray} from "../types/typesMain";

export interface IPropsSelect {
    categoriesArray: TInfoArray[]
    placeholder: string
    setParams: React.Dispatch<React.SetStateAction<TFetchGamesParams>>
    paramKey: string
}

export interface IPropsGameList {
    products: TGamesResponse
}

export interface IPropsError {
    message: string
}

export interface IPropsLayout {
    children: JSX.Element | JSX.Element[];
}

export interface IPropsSelectBlock {
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

export interface IPropsSelectList {
    setParams: React.Dispatch<React.SetStateAction<TFetchGamesParams>>
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
