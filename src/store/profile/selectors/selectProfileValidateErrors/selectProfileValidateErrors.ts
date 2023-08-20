import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
