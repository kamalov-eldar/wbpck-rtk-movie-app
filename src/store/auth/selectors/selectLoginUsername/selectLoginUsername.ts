import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectLoginUsername = (state: StateSchema) => state?.auth?.username || '';
