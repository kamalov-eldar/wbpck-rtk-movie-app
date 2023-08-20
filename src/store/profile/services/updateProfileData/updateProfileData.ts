import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "providers/storeProvider/StateSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { Profile, ValidateProfileError } from "../../../../store/profile/types/profile";
import { selectProfileForm } from "../../../../store/profile/selectors/selectProfileForm/selectProfileForm";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = selectProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>("/profile", formData);

            if (!response.data) {
                throw new Error("");
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
