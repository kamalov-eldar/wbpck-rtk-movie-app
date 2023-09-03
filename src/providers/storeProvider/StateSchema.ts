import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router";
import { AuthSchema } from "store/auth/types/authSchema";
import { PaginationSchema } from "store/pagination/types/paginationSchema";
import { MovieSchema } from "store/movie/types/movie";
import { ProfileSchema } from "store/profile/types/profile";
import { UserSchema } from "store/user/types/user";
import { VideosSchema } from "store/videos/types/videos";
import { DetailSchema } from "store/detail/types/detail";

export interface StateSchema {
    user: UserSchema;
    movie: MovieSchema;
    pagination: PaginationSchema;
    // Асинхронные редюсеры
    videos?: VideosSchema; // videos: videosReducer,
    detail?: DetailSchema; // detail: detailReducer,
    authForm?: AuthSchema;
    profile?: ProfileSchema; //profile: profileReducer,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
export interface ThunkExtraArg {
    api: AxiosInstance;
    apiTmdb: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
