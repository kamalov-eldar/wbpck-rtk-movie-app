import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectSimilarMovieError = (state: StateSchema) => state.movie.errorSimilar;
export const selectSimilarMovieIsLoading = (state: StateSchema) => state.movie?.isLoadingSimilar;
export const selectSimilarMovieTotalPages = (state: StateSchema) => state.movie?.similarTotalPages;
export const selectSimilarMovieList = (state: StateSchema) => state.movie?.dataSimilarFilms;
