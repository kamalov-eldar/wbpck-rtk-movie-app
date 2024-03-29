import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "../../../../../config/jest/TestAsyncThunk/TestAsyncThunk";
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

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        const result = await thunk.callThunk();

        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: "" },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
