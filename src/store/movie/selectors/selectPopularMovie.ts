import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectPopularMovieError = (state: StateSchema) => state.movie.errorPopular;
export const selectPopularMovieIsLoading = (state: StateSchema) => state.movie?.isLoadingPopular;
export const selectPopularMovieTotalPages = (state: StateSchema) => state.movie?.popularTotalPages;
export const selectPopularMovieList = (state: StateSchema) => state.movie?.dataPopularFilms;
