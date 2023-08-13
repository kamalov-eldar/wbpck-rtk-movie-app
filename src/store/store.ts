import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../providers/storeProvider/StateSchema";
import { userReducer } from "./user/slice/userSlice";
import { authReducer } from "./auth/slice/authSlice";
import { createReducerManager } from "providers/storeProvider/reduceManager";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        //auth: authReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    //@ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
