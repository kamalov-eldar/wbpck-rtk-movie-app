import { validateProfileData } from "./validateProfileData";
import { Country, Currency } from "../../../../global/types/global";
import { ValidateProfileError } from "../../../../store/profile/types/profile";

const data = {
    username: "admin",
    age: 22,
    country: Country.Bahamas,
    lastname: "lastname",
    firstname: "firstname",
    city: "city",
    currency: Currency.USD,
};

describe("validateProfileData.test", () => {
    test("success", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test("should work with empty state", () => {
        const result = validateProfileData(undefined);
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
    test("if empty firstname & lastname ", () => {
        const result = validateProfileData({ ...data, firstname: "", lastname: "" });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("if empty age", () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test("if empty country", () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test("incorrect all", async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
