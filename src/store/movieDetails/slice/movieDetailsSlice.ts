import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieDetailsSchema } from "../types/movieDetails";
import { fetchMovieDetails } from "../services/fetchMovieDetails/fetchMovieDetails";
import { TMovieDetails } from "api/types";

const initialState: MovieDetailsSchema = {
    isLoading: true,
    error: undefined,
    data: undefined,
};

export const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDetails.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<TMovieDetails>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: movieDetailsActions } = movieDetailsSlice;
export const { reducer: movieDetailsReducer } = movieDetailsSlice;
