import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "providers/storeProvider/StateSchema";
import { Profile } from "store/profile/types/profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (profileId, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log("error-fetchProfileData: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке профиля");
        }
    },
);
