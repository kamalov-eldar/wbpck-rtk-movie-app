import { StateSchema } from "providers/storeProvider/StateSchema";
import { selectProfileForm } from "./selectProfileForm";
import { Country, Currency } from "../../../../global/types/global";

describe("selectProfileForm.test", () => {
    test("should work with filled state", () => {
        const form = {
            username: "admin",
            age: 22,
            country: Country.Bahamas,
            lastname: "lastname",
            firstname: "firstname",
            city: "city",
            currency: Currency.USD,
        };
        const state: CustomDeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(selectProfileForm(state as StateSchema)).toEqual(form);
    });
    test("should work with empty state", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
