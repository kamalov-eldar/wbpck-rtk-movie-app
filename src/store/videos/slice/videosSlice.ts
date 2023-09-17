import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TResponseVideosList } from "api/types";
import { fetchVideosList } from "../fetchVideosList/fetchVideosList";
import { VideosSchema } from "../types/videos";

const initialState: VideosSchema = {
    isLoading: false,
    error: undefined,
    dataVideosList: undefined,
};

export const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideosList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchVideosList.fulfilled, (state, action: PayloadAction<TResponseVideosList>) => {
                state.isLoading = false;
                state.dataVideosList = action.payload.results;
            })
            .addCase(fetchVideosList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: videosActions } = videosSlice;
export const { reducer: videosReducer } = videosSlice;
