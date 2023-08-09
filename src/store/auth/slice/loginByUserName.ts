import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "store/user/slice/userSlice";
import { User } from "store/user/types/user";

interface loginByUserNameProps {
    username: string;
    password: string;
}
// { rejectValue: string } тип данных что отправляем в thunkAPI.rejectWithValue(string)
export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, { rejectValue: string }>(
    "login/loginByUserName",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:8000/login", authData);
            console.log("response: ", response.data);

            if (!response.data) {
                throw new Error("");
            }
            localStorage.setItem("user", JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log("error: ", error);
            return thunkAPI.rejectWithValue("Неверный логин или пароль");
        }
    },
);
