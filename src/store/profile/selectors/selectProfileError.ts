import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectProfileError = (state: StateSchema) => state.profile?.error;
