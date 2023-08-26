import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectTopMovieError = (state: StateSchema) => state.movie.errorTop;
export const selectTopMovieIsLoading = (state: StateSchema) => state.movie?.isLoadingTop;
export const selectTopMovieTotalPages = (state: StateSchema) => state.movie?.topTotalPages;
export const selectTopMovieList = (state: StateSchema) => state.movie?.dataTopFilms;
