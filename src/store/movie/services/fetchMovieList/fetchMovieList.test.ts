import { fetchPopularMovieList } from "./fetchPopularMovieList";
import { TestAsyncThunk } from "../../../../../config/jest/TestAsyncThunk/TestAsyncThunk";
import { userActions } from "../../../user/slice/userSlice";
import { Country, Currency } from "../../../../global/types/global";

const data = {
    username: "admin",
    age: 22,
    country: Country.Bahamas,
    lastname: "lastname",
    firstname: "firstname",
    city: "city",
    currency: Currency.USD,
};

describe("fetchProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchPopularMovieList);
        const result = await thunk.callThunk(1);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchPopularMovieList);
        const result = await thunk.callThunk(1);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        expect(result.meta.requestStatus).toBe("fulfilled");
    });
});
