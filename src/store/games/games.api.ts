import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, API_URL} from "../../apiConsts";
import {TGamesResponse, TFetchGameParams, TFetchGamesParams, TNoResults} from "../../types/typesMain";
import {IGameDetails} from "../../interfaces/interfacesMain";

export const gameAPI = createApi({
    reducerPath: 'gameAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        fetchGames: build.query<TGamesResponse | TNoResults, TFetchGamesParams>({
            query: (params: TFetchGamesParams) => ({
                url: '/games',
                params: params,
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }),
            keepUnusedDataFor: 0,
        }),
        fetchGameDetails: build.query<IGameDetails, TFetchGameParams>({
            query: (params: TFetchGameParams) => ({
                url: '/game',
                params: params,
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }),
            keepUnusedDataFor: 60 * 5,
        }),
    }),
});
