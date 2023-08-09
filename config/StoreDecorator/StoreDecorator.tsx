import { StoryFn } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { StoreProvider } from "providers/storeProvider/StoreProvider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) =>
    (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
    
