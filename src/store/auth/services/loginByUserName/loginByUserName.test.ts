import { loginByUserName } from "./loginByUserName";
import { TestAsyncThunk } from "../../../../../config/jest/TestAsyncThunk/TestAsyncThunk";
import { userActions } from "../../../user/slice/userSlice";

describe("loginByUsername.test", () => {
    test("success login", async () => {
        const userValue = { username: "123", id: "1" };
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: "123", password: "123" });

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: "123", password: "123" });

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("Неверный логин или пароль");
    });
});
