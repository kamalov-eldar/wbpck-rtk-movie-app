import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectProfileForm = (state: StateSchema) => state.profile?.form;
