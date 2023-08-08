import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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

            if (!response.data) {
                throw new Error("");
            }

            return response.data;
        } catch (error) {
            console.log("error: ", error);
            return thunkAPI.rejectWithValue("error-rejectWithValue");
        }
    },
);
