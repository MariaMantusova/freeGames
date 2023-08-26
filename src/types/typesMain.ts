interface IInfoArray {
    value: string
    label: string
}

export type {IInfoArray};

export interface IGameForMainPage {
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
}

export interface IGameForGamePage {
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
        "processor": string,
        "memory": string,
        "graphics": string,
        "storage": string,
    },
}
