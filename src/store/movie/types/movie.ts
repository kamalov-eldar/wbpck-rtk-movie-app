import { TMovieItem } from "api/types";

export interface IError {
    statusError: boolean;
    messageError: string;
}

export interface MovieSchema {
    errorPopular?: IError;
    isLoadingPopular: boolean;
    dataPopularFilms?: TMovieItem[];
    popularTotalPages: number;

    errorNowPlaying?: IError;
    isLoadingNowPlaying: boolean;
    dataNowPlayingFilms?: TMovieItem[];
    nowPlayingTotalPages: number;

    errorTop?: IError;
    isLoadingTop: boolean;
    dataTopFilms?: TMovieItem[];
    topTotalPages: number;

    errorSimilar?: IError;
    isLoadingSimilar: boolean;
    dataSimilarFilms?: TMovieItem[];
    similarTotalPages: number;

    errorUpcoming?: IError;
    isLoadingUpcoming: boolean;
    dataUpcomingFilms?: TMovieItem[];
    upcomingTotalPages: number;
}
