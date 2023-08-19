import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { Profile } from "../types/profile";
import { ThunkConfig } from "providers/storeProvider/StateSchema";
import { selectProfileForm } from "../selectors/selectProfileForm";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/updateProfileData",
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = selectProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>("/profile", formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
