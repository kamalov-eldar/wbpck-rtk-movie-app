import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
//import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { RootStoreContext } from "root-store-context";
import RootStore from "store/root-store";
//import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
}

export function componentRender(component: ReactNode) {
    const route = "/";

    return render(
        <RootStoreContext.Provider value={new RootStore()}>
            <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
        </RootStoreContext.Provider>,
    );
}
