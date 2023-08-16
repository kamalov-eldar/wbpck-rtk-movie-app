import { selectLoginIsLoading } from "./selectLoginIsLoading";
import { StateSchema } from "providers/storeProvider/StateSchema";

describe("selectLoginIsLoading.test", () => {
    test("should return true", () => {
        const state: CustomDeepPartial<StateSchema> = {
            authForm: { isLoading: true },
        };
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should return false", () => {
        const state: CustomDeepPartial<StateSchema> = {
            authForm: { isLoading: false },
        };
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(false);
    });
    test("state empty", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
