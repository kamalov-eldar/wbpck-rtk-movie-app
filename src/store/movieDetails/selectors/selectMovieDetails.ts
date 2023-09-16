import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectMovieDetailError = (state: StateSchema) => state.movieDetails?.error;
export const selectMovieDetailIsLoading = (state: StateSchema) => state.movieDetails?.isLoading;
export const selectMovieDetailGenres = (state: StateSchema) => state.movieDetails?.data?.genres;
export const selectMovieDetailTitle = (state: StateSchema) => state.movieDetails?.data?.title;
export const selectMovieDetailOverview = (state: StateSchema) => state.movieDetails?.data?.overview;
export const selectMovieDetailBackdropPath = (state: StateSchema) => state.movieDetails?.data?.backdrop_path || "";
export const selectMovieDetailPosterPath = (state: StateSchema) => state.movieDetails?.data?.poster_path || "";
export const selectMovieDetailId = (state: StateSchema) => state.movieDetails?.data?.id;
export const selectMovieDetailData = (state: StateSchema) => state.movieDetails?.data;
