import {TMinRequirements, TScreenshot} from "../types/typesMain";

export interface IGame {
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

export interface IGameDetails {
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
    "minimum_system_requirements"?: TMinRequirements;
    "screenshots": TScreenshot[];
}
