import { Profile } from "../types/profile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../../user/slice/userSlice";
import { User } from "../../user/types/user";
import { ThunkConfig, ThunkExtraArg } from "providers/storeProvider/StateSchema";
import { profileActions } from "./profileSlice";

// { rejectValue: string } тип данных что отправляем в thunkAPI.rejectWithValue(string)
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>("/profile");
            console.log("response-profile: ", response.data);

            if (!response.data) {
                throw new Error("");
            }
            // localStorage.setItem("profile", JSON.stringify(response.data));
            thunkAPI.dispatch(profileActions.setProfileData(response.data));
            //thunkAPI.extra.navigate("/profile"); // редирект после усп авторизации
            return response.data;
        } catch (error) {
            console.log("error: ", error);
            return thunkAPI.rejectWithValue("error");
        }
    },
);
