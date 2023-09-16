import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectCommentsError = (state: StateSchema) => state.movieDetailsComments?.error;
export const selectCommentsIsLoading = (state: StateSchema) => state.movieDetailsComments?.isLoading;
