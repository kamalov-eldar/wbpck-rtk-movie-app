import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectLoginUsername = (state: StateSchema) => state?.authForm?.username || "";
