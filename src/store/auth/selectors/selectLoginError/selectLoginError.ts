import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectLoginError = (state: StateSchema) => state?.authForm?.error;
