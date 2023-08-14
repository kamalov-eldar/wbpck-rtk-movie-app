import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
