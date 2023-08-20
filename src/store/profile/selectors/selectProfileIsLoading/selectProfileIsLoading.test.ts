import { StateSchema } from "providers/storeProvider/StateSchema";
import { selectProfileIsLoading } from "./selectProfileIsLoading";

describe("selectProfileIsLoading.test", () => {
    test("should work with filled state", () => {
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(false);
    });
    test("should work with filled state", () => {
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
