import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DetailSchema } from "../types/detail";
import { fetchDetail } from "../fetchDetail/fetchDetail";
import { TMovieDetail } from "api/types";

const initialState: DetailSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchDetail.fulfilled, (state, action: PayloadAction<TMovieDetail>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchDetail.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: detailActions } = detailSlice;
export const { reducer: detailReducer } = detailSlice;
