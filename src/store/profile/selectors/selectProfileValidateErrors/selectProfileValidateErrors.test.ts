import { selectProfileValidateErrors } from "./selectProfileValidateErrors";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { ValidateProfileError } from "../../../../store/profile/types/profile";

describe("selectProfileValidateErrors.test", () => {
    test("should return error", () => {
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE],
            },
        };
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test("should work with empty state", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
