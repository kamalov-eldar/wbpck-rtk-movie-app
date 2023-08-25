import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../../../user/slice/userSlice";
import { User } from "../../../user/types/user";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface loginByUserNameProps {
    username: string;
    password: string;
}
// { rejectValue: string } тип данных что отправляем в thunkApi.rejectWithValue(string)
export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, ThunkConfig<string>>(
    "login/loginByUserName",
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await thunkApi.extra.api.post<User>("/login", authData);
            console.log("response-login: ", response.data);

            if (!response.data) {
                throw new Error("");
            }
            localStorage.setItem("user", JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            if (extra.navigate) extra.navigate("/profile"); // редирект после усп авторизации
            return response.data;
        } catch (error) {
            console.log("error: ", error);
            return thunkApi.rejectWithValue("Неверный логин или пароль");
        }
    },
);
