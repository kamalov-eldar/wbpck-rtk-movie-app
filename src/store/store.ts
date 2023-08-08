import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../providers/storeProvider/StateSchema";
import { counterReducer } from "./counter/slice/counterSlice";
import { userReducer } from "./user/slice/userSlice";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
