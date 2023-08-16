import { ReactNode } from "react";
import { Provider } from "react-redux";
import {  ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../../store/store";
import { StateSchema } from "./StateSchema";
import { useNavigate } from "react-router";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: CustomDeepPartial<StateSchema>;
    asyncReducers?: CustomDeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const navigate = useNavigate();
    // чтоб перекинуть на страницу профиля псоле усп авторизации

    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);

    return <Provider store={store}>
                {children}
           </Provider>;
};
