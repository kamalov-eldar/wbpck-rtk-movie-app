import { ReactNode } from "react";
import { Provider } from "react-redux";
import { DeepPartial } from "@reduxjs/toolkit";
import { createReduxStore } from "../../store/store";
import { StateSchema } from "./StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};