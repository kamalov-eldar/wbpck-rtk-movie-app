import { StateSchema } from "providers/storeProvider/StateSchema";
import { UserSchema } from "../types/user";

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
