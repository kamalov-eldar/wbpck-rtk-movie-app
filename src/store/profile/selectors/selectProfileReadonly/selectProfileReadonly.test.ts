import { StateSchema } from "providers/storeProvider/StateSchema";
import { selectProfileReadonly } from "./selectProfileReadonly";

describe("selectProfileReadonly.test", () => {
    test("should work with filled state", () => {
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(selectProfileReadonly(state as StateSchema)).toEqual(false);
    });
    test("should work with filled state", () => {
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(selectProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
