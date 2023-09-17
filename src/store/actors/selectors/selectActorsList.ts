import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectActorsListError = (state: StateSchema) => state.actors?.error;
export const selectActorsListIsLoading = (state: StateSchema) => state.actors?.isLoading;
export const selectActorsList = (state: StateSchema) => state.actors?.data;
