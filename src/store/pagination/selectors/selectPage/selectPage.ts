import { StateSchema } from "providers/storeProvider/StateSchema";

export const selectPage = (state: StateSchema) => state.pagination.page;
