import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, API_URL} from "../../apiConsts";
import {TGamesResponse, TFetchGameParams, TFetchGamesParams, TNoResults} from "../../types/typesMain";
import {IGameDetails} from "../../interfaces/interfacesMain";

const staggeredBaseQuery = retry(fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host':
            'free-to-play-games-database.p.rapidapi.com',
    },
}), {
    maxRetries: 3,
})

export const gameAPI = createApi({
    reducerPath: 'gameAPI',
    baseQuery: staggeredBaseQuery,
    endpoints: (build) => ({
        fetchGames: build.query<TGamesResponse | TNoResults, TFetchGamesParams>({
            query: (params: TFetchGamesParams) => ({
                url: '/games',
                params: params,
            }),
            keepUnusedDataFor: 0,
        }),
        fetchGameDetails: build.query<IGameDetails, TFetchGameParams>({
            query: (params: TFetchGameParams) => ({
                url: '/game',
                params: params,
            }),
            keepUnusedDataFor: 60 * 5,
        }),
    }),
});
