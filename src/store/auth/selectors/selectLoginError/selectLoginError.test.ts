import { selectLoginError } from "./selectLoginError";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginError.test", () => {
    test("should return error string", () => {
        const state: CustomDeepPartial<StateSchema> = {
            authForm: { error: "error" },
        };
        expect(selectLoginError(state as StateSchema)).toEqual("error");
    });
    test("state empty", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectLoginError(state as StateSchema)).toEqual(undefined);
    });
});
