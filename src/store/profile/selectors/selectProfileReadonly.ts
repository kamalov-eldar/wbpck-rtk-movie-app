import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectProfileReadonly = (state: StateSchema) => state.profile?.readonly;
