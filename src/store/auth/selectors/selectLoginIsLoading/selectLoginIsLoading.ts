import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectLoginIsLoading = (state: StateSchema) => state?.auth?.isLoading || false;
