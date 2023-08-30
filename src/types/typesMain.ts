import {IGame} from "../interfaces/interfacesMain";

export type TGamesResponse = IGame[];

export type TFetchGameParams = {
    id: string;
};

export type TInfoArray = {
    value: string
    label: string
}

export type TScreenshot = {
    "id": number;
    "image": string;
}

export type TNoResults = {
    status: number;
    status_message: string;
};

export type TFetchGamesParams = {
    platform?: string;
    'sort-by'?: string;
    category?: string;
};

export type TMinRequirements = {
    "os": string;
    "processor": string;
    "memory": string;
    "graphics": string;
    "storage": string;
}
