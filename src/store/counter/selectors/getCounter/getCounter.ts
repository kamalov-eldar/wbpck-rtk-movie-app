import { StateSchema } from "providers/store/StateSchema";

export const getCounter = (state: StateSchema) => state.counter;
