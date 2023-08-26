import { TMovieItem } from "api/types";

export interface MovieSchema {
    dataPopularFilms?: TMovieItem[];
    popularTotalPages: number;
    errorPopular?: string;
    isLoadingPopular: boolean;

    dataTopFilms?: TMovieItem[];
    topTotalPages: number;
    errorTop?: string;
    isLoadingTop: boolean;

    dataSimilarFilms?: TMovieItem[];
    similarTotalPages: number;
    errorSimilar?: string;
    isLoadingSimilar: boolean;

    dataTopTVList?: TMovieItem[];
    topTVListTotalPages: number;
    errorTopTVList?: string;
    isLoadingTopTVList: boolean;
}
