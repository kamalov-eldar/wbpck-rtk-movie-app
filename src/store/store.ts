import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../providers/storeProvider/StateSchema";
import { userReducer } from "./user/slice/userSlice";
import { createReducerManager } from "providers/storeProvider/reduceManager";
import { NavigateOptions, To } from "react-router";
import authAxios from "api/authClient";
import tmdbAxios from "api/tmdbClient";
import { movieReducer } from "./movie/slice/movieSlice";
import { paginationReducer } from "./pagination/slice/paginationSlice";
import { viewCardsReducer } from "./viewCards/slice/viewCardsSlice";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        pagination: paginationReducer,
        viewCards: viewCardsReducer,
        movie: movieReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: { api: authAxios, apiTmdb: tmdbAxios, navigate },
                },
            }),
    });

    //@ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
