import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "./fetchProfileData";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = "";
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
               // state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
