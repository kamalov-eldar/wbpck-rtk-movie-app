import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileSchema, Profile } from "../types/user";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
