import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { StoreProvider } from "../../../src/providers/storeProvider/StoreProvider";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const { route = "/", initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
        </StoreProvider>,
    );
}
