import { DeepPartial } from "@reduxjs/toolkit";
import { selectLoginPassword } from "./selectLoginPassword";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginPassword.test", () => {
    test("should return string", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { password: "123456" },
        };
        expect(selectLoginPassword(state as StateSchema)).toEqual("123456");
    });
    test("should return empty string", () => {
        const state: DeepPartial<StateSchema> = {
            auth: { password: "" },
        };
        expect(selectLoginPassword(state as StateSchema)).toEqual("");
    });
    test("state empty", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginPassword(state as StateSchema)).toEqual("");
    });
});
