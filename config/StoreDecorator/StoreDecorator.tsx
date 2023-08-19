import { StoryFn } from "@storybook/react";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { StoreProvider } from "providers/storeProvider/StoreProvider";
import { authReducer } from "store/auth/slice/authSlice";
import { profileReducer } from "store/profile/slice/profileSlice";
import { ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    authForm: authReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: CustomDeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) =>
    (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );