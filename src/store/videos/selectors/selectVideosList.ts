import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectVideosListError = (state: StateSchema) => state.videos?.error;
export const selectVideosListIsLoading = (state: StateSchema) => state.videos?.isLoading;
export const selectVideosList = (state: StateSchema) => state.videos?.dataVideosList;
