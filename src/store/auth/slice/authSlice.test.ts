import { authActions, authReducer, authSlice } from "./authSlice";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { userActions } from "store/user/slice/userSlice";
import { AuthSchema } from "../types/authSchema";

describe("authSlice.test", () => {
    test("should return value", () => {
        const state: CustomDeepPartial<AuthSchema> = { username: "" };
        expect(authReducer(state as AuthSchema, authActions.setUserName("user"))).toEqual({ username: "user" });
    });
    test("should return value", () => {
        const state: CustomDeepPartial<AuthSchema> = { password: "" };
        expect(authReducer(state as AuthSchema, authActions.setPassword("123456"))).toEqual({ password: "123456" });
    });
});
