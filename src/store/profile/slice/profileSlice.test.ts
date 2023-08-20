import { Country, Currency } from "../../../global/types/global";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
const data = {
    username: "admin",
    age: 22,
    country: Country.Madagascar,
    lastname: "ulbi tv",
    first: "asd",
    city: "asf",
    currency: Currency.USD,
};
describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: CustomDeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test("test cancelEdit", () => {
        const state: CustomDeepPartial<ProfileSchema> = { data, form: { username: "" } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test("test update profile", () => {
        const state: CustomDeepPartial<ProfileSchema> = { form: { username: "123" } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: "123" }))).toEqual({
            form: { username: "123" },
        });
    });
    test(" update profile service pending", () => {
        const state: CustomDeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            validateErrors: undefined,
            isLoading: true,
        });
    });

    test(" update profile service fullfiled", () => {
        const state: CustomDeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
            isLoading: false,
            data,
            form: data,
            validateErrors: undefined,
            readonly: true,
        });
    });
});
