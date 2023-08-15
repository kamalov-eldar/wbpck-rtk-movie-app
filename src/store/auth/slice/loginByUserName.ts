import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../../user/slice/userSlice";
import { User } from "../../user/types/user";
import { ThunkConfig, ThunkExtraArg } from "providers/storeProvider/StateSchema";

interface loginByUserNameProps {
    username: string;
    password: string;
}
// { rejectValue: string } тип данных что отправляем в thunkAPI.rejectWithValue(string)
export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, ThunkConfig<string>>(
    "login/loginByUserName",
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>("/login", authData);
            console.log("response-login: ", response.data);

            if (!response.data) {
                throw new Error("");
            }
            localStorage.setItem("user", JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            thunkAPI.extra.navigate("/profile"); // редирект после усп авторизации
            return response.data;
        } catch (error) {
            console.log("error: ", error);
            return thunkAPI.rejectWithValue("Неверный логин или пароль");
        }
    },
);
