import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectTopTVListError = (state: StateSchema) => state.movie.errorTopTVList;
export const selectTopTVListIsLoading = (state: StateSchema) => state.movie?.isLoadingTopTVList;
export const selectTopTVListTotalPages = (state: StateSchema) => state.movie?. topTVListTotalPages;
export const selectTopTVList = (state: StateSchema) => state.movie?.dataTopTVList;
