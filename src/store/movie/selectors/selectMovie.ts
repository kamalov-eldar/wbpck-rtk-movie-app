import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectMovieError = (state: StateSchema) => state.movie.error;
export const selectMovieIsLoading = (state: StateSchema) => state.movie?.isLoading;

export const selectNowPlayingMovieTotalPages = (state: StateSchema) => state.movie?.nowPlayingTotalPages;
export const selectNowPlayingMovieList = (state: StateSchema) => state.movie?.dataNowPlayingFilms;

export const selectPopularMovieTotalPages = (state: StateSchema) => state.movie?.popularTotalPages;
export const selectPopularMovieList = (state: StateSchema) => state.movie?.dataPopularFilms;

export const selectSimilarMovieTotalPages = (state: StateSchema) => state.movie?.similarTotalPages;
export const selectSimilarMovieList = (state: StateSchema) => state.movie?.dataSimilarFilms;

export const selectTopMovieTotalPages = (state: StateSchema) => state.movie?.topTotalPages;
export const selectTopMovieList = (state: StateSchema) => state.movie?.dataTopFilms;

export const selectUpcomingMovieTotalPages = (state: StateSchema) => state.movie?.upcomingTotalPages;
export const selectUpcomingMovieList = (state: StateSchema) => state.movie?.dataUpcomingFilms;
