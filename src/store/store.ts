import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../providers/storeProvider/StateSchema";
import { userReducer } from "./user/slice/userSlice";
import { authReducer } from "./auth/slice/authSlice";
import { createReducerManager } from "providers/storeProvider/reduceManager";
import { profileReducer } from "./profile/slice/profileSlice";
import axiosClient from "api/axiosClient";
//import { To, History } from "history";
import { NavigateOptions, To } from "react-router";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        profile: profileReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: { api: axiosClient, navigate },
                },
            }),
    });

    //@ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
