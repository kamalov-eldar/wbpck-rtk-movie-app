import { StateSchema } from "providers/storeProvider/StateSchema";
import { selectProfileError } from "./selectProfileError";

describe("selectProfileError.test", () => {
    test("should work with filled state", () => {
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        };
        expect(selectProfileError(state as StateSchema)).toEqual("error");
    });
    test("should work with empty state", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectProfileError(state as StateSchema)).toEqual(undefined);
    });
});
