import { selectLoginPassword } from "./selectLoginPassword";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginPassword.test", () => {
    test("should return string", () => {
        const state: CustomDeepPartial<StateSchema> = {
            authForm: { password: "123456" },
        };
        expect(selectLoginPassword(state as StateSchema)).toEqual("123456");
    });
    test("should return empty string", () => {
        const state: CustomDeepPartial<StateSchema> = {
            authForm: { password: "" },
        };
        expect(selectLoginPassword(state as StateSchema)).toEqual("");
    });
    test("state empty", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectLoginPassword(state as StateSchema)).toEqual("");
    });
});
