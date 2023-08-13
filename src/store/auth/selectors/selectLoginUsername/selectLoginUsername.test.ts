import { DeepPartial } from "@reduxjs/toolkit";
import { selectLoginUsername } from "./selectLoginUsername";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginUsername.test", () => {
    test("should return string", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { password: "123456" },
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual("123456");
    });
    test("should return empty string", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { password: "" },
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual("");
    });
    test("state empty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginUsername(state as StateSchema)).toEqual("");
    });
});
