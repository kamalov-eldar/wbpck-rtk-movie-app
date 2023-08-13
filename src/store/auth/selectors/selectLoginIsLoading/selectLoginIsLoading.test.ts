import { DeepPartial } from "@reduxjs/toolkit";
import { selectLoginIsLoading } from "./selectLoginIsLoading";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginIsLoading.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { isLoading: true },
        };
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { isLoading: false },
        };
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(false);
    });
    test("state empty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
