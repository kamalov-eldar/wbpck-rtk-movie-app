import { Profile } from "../types/profile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>("/profile");

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log("error-fetchProfileData: ", error);
            return thunkAPI.rejectWithValue("Произошла ошибка при загрузке профиля");
        }
    },
);
