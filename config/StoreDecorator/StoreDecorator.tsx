import { StoryFn } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { StoreProvider } from "providers/storeProvider/StoreProvider";
import { authReducer } from "store/auth/slice/authSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    auth: authReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: StoryFn) =>
        (
            <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                <StoryComponent />
            </StoreProvider>
        );
