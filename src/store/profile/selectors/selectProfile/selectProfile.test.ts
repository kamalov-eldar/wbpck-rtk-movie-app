import { Country, Currency } from "../../../../global/types/global";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { selectProfile } from "./selectProfile";

describe("selectProfile.test", () => {
    test("should work with filled state", () => {
        const data = {
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
                data,
            },
        };
        expect(selectProfile(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: CustomDeepPartial<StateSchema> = {};
        expect(selectProfile(state as StateSchema)).toEqual(undefined);
    });
});
