import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectProfileIsLoading = (state: StateSchema) => state.profile?.isLoading || false;
