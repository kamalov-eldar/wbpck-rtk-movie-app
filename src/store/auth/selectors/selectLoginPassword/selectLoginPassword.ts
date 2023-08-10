import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectLoginPassword = (state: StateSchema) => state?.auth?.password || '';
