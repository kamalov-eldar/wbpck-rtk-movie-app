import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectDetailError = (state: StateSchema) => state.detail?.error;
export const selectDetailIsLoading = (state: StateSchema) => state.detail?.isLoading;
export const selectDetailGenres = (state: StateSchema) => state.detail?.data?.genres;
export const selectDetailTitle = (state: StateSchema) => state.detail?.data?.title;
export const selectDetailOverview = (state: StateSchema) => state.detail?.data?.overview;
export const selectDetailBackdropPath = (state: StateSchema) => state.detail?.data?.backdrop_path || '';
export const selectDetailPosterPath = (state: StateSchema) => state.detail?.data?.poster_path || '';
export const selectDetailMovieID = (state: StateSchema) => state.detail?.data?.id;
