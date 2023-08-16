import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectLoginPassword = (state: StateSchema) => state?.authForm?.password || "";
