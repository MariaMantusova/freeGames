interface IInfoArray {
    value: string
    label: string
}

export type {IInfoArray};

export type GamesResponse = IGameForMainPage[];

export interface IGameForMainPage {
    "id": number;
    "title": string;
    "thumbnail": string;
    "short_description": string;
    "game_url": string;
    "genre": string;
    "platform": string;
    "publisher": string;
    "developer": string;
    "release_date": string;
    "freetogame_profile_url": string;
}

export interface IGameForGamePage {
    "id": number;
    "title": string;
    "thumbnail": string;
    "status": string;
    "short_description": string;
    "description": string;
    "game_url": string;
    "genre": string;
    "platform": string;
    "publisher": string;
    "developer": string;
    "release_date": string;
    "freetogame_profile_url": string;
    "minimum_system_requirements"?: IMinRequirements;
    "screenshots": IScreenshot[];
}

interface IMinRequirements {
    "os": string;
    "processor": string;
    "memory": string;
    "graphics": string;
    "storage": string;
}

interface IScreenshot {
    "id": number;
    "image": string;
}
