import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router";
import { AuthSchema } from "store/auth/types/authSchema";
import { PaginationSchema } from "store/pagination/types/paginationSchema";
import { MovieSchema } from "store/movie/types/movie";
import { ProfileSchema } from "store/profile/types/profile";
import { UserSchema } from "store/user/types/user";
import { VideosSchema } from "store/videos/types/videos";
import { MovieDetailsSchema } from "store/movieDetails/types/movieDetails";
import { ViewCardsSchema } from "store/viewCards/types/viewCardsSchema";
import { AddCommentFormSchema } from "store/addCommentForm/types/addCommentForm";
import { MovieDetailsCommentsSchema } from "store/comments/types/comment";

export interface StateSchema {
    user: UserSchema;
    movie: MovieSchema;
    pagination: PaginationSchema;
    viewCards: ViewCardsSchema;
    // Асинхронные редюсеры
    videos?: VideosSchema; // videos: videosReducer,
    movieDetails?: MovieDetailsSchema; // movieDetail: movieDetailReducer,
    authForm?: AuthSchema;
    profile?: ProfileSchema; //profile: profileReducer,
    addCommentForm?: AddCommentFormSchema;
    movieDetailsComments?: MovieDetailsCommentsSchema;
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
