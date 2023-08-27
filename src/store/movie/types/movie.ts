import { TMovieItem } from "api/types";

export interface MovieSchema {
    error?: string;
    isLoading: boolean;

    dataPopularFilms?: TMovieItem[];
    popularTotalPages: number;

    dataNowPlayingFilms?: TMovieItem[];
    nowPlayingTotalPages: number;

    dataTopFilms?: TMovieItem[];
    topTotalPages: number;

    dataSimilarFilms?: TMovieItem[];
    similarTotalPages: number;

    dataUpcomingFilms?: TMovieItem[];
    upcomingTotalPages: number;

    dataTopTVList?: TMovieItem[];
    topTVListTotalPages: number;
    errorTopTVList?: string;
    isLoadingTopTVList: boolean;
}
