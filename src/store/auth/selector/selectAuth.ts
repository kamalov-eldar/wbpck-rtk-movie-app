import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectAuthForm = (state: StateSchema) => state.auth;
