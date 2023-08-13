import { DeepPartial } from "@reduxjs/toolkit";
import { selectLoginError } from "./selectLoginError";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginError.test", () => {
    test("should return error string", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { error: "error" },
        };
        expect(selectLoginError(state as StateSchema)).toEqual("error");
    });
    test("state empty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginError(state as StateSchema)).toEqual(undefined);
    });
});
