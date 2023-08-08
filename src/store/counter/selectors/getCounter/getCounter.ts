import { StateSchema } from "providers/storeProvider/StateSchema";

export const getCounter = (state: StateSchema) => {
    return state.counter;
};
