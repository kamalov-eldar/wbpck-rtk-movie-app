import { StoryFn } from "@storybook/react";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { StoreProvider } from "providers/storeProvider/StoreProvider";
import { authReducer } from "store/auth/slice/authSlice";
import { profileReducer } from "store/profile/slice/profileSlice";
import { ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { videosReducer } from "store/videos/slice/videosSlice";
import { movieDetailsCommentsReducer } from "store/comments/slice/movieDetailsCommentsSlice";
import { addCommentFormReducer } from "store/addCommentForm/slices/addCommentFormSlice";
import { movieDetailsReducer } from "store/movieDetails/slice/movieDetailsSlice";

const defaultAsyncReducers: ReducersList = {
    authForm: authReducer,
    profile: profileReducer,
    videos: videosReducer,
    movieDetails: movieDetailsReducer,
    addCommentForm: addCommentFormReducer,
    movieDetailsComments: movieDetailsCommentsReducer,
};

export const StoreDecorator = (state: CustomDeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) =>
    (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
