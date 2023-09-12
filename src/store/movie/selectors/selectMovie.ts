import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectNowPlayingErrorMessage = (state: StateSchema) => state.movie.errorNowPlaying?.messageError;
export const selectNowPlayingErrorStatus = (state: StateSchema) => state.movie.errorNowPlaying?.statusError;
export const selectNowPlayingError = (state: StateSchema) => state.movie.errorNowPlaying;

export const selectNowPlayingIsLoading = (state: StateSchema) => state.movie?.isLoadingNowPlaying;
export const selectNowPlayingMovieTotalPages = (state: StateSchema) => state.movie?.nowPlayingTotalPages;
export const selectNowPlayingMovieList = (state: StateSchema) => state.movie?.dataNowPlayingFilms;

export const selectPopularErrorMessage = (state: StateSchema) => state.movie.errorPopular?.messageError;
export const selectPopularErrorStatus = (state: StateSchema) => state.movie.errorPopular?.statusError;
export const selectPopularError = (state: StateSchema) => state.movie.errorPopular;

export const selectPopularIsLoading = (state: StateSchema) => state.movie?.isLoadingPopular;
export const selectPopularMovieTotalPages = (state: StateSchema) => state.movie?.popularTotalPages;
export const selectPopularMovieList = (state: StateSchema) => state.movie?.dataPopularFilms;

export const selectSimilarErrorMessage = (state: StateSchema) => state.movie.errorSimilar?.messageError;
export const selectSimilarErrorStatus = (state: StateSchema) => state.movie.errorSimilar?.statusError;
export const selectSimilarError = (state: StateSchema) => state.movie.errorSimilar;

export const selectSimilarIsLoading = (state: StateSchema) => state.movie?.isLoadingSimilar;
export const selectSimilarMovieTotalPages = (state: StateSchema) => state.movie?.similarTotalPages;
export const selectSimilarMovieList = (state: StateSchema) => state.movie?.dataSimilarFilms;

export const selectTopErrorMessage = (state: StateSchema) => state.movie.errorTop?.messageError;
export const selectTopErrorStatus = (state: StateSchema) => state.movie.errorTop?.statusError;
export const selectTopError = (state: StateSchema) => state.movie.errorTop;

export const selectTopIsLoading = (state: StateSchema) => state.movie?.isLoadingTop;
export const selectTopMovieTotalPages = (state: StateSchema) => state.movie?.topTotalPages;
export const selectTopMovieList = (state: StateSchema) => state.movie?.dataTopFilms;

export const selectUpcomingErrorMessage = (state: StateSchema) => state.movie.errorUpcoming?.messageError;
export const selectUpcomingErrorStatus = (state: StateSchema) => state.movie.errorUpcoming?.statusError;
export const selectUpcomingError = (state: StateSchema) => state.movie.errorUpcoming;

export const selectUpcomingIsLoading = (state: StateSchema) => state.movie?.isLoadingUpcoming;
export const selectUpcomingMovieTotalPages = (state: StateSchema) => state.movie?.upcomingTotalPages;
export const selectUpcomingMovieList = (state: StateSchema) => state.movie?.dataUpcomingFilms;
