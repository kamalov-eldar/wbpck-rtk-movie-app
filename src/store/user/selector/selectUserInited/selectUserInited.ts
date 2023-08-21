import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectUserInited = (state: StateSchema) => state.user._inited;
