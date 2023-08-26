import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovieList } from "../services/fetchMovieList/fetchPopularMovieList";
import { TMovieItem, TResponseMovieList } from "api/types";
import { MovieSchema } from "../types/movie";
import { fetchTopMovieList } from "../services/fetchMovieList/fetchTopMovieList";
import { fetchSimilarMovieList } from "../services/fetchMovieList/fetchSimilarMovieList";
import { fetchTopTVList } from "../services/fetchMovieList/fetchTopTVList";

const initialState: MovieSchema = {
    isLoadingPopular: false,
    errorPopular: undefined,
    dataPopularFilms: [] as TMovieItem[],
    popularTotalPages: 0,

    isLoadingTop: false,
    errorTop: undefined,
    dataTopFilms: [] as TMovieItem[],
    topTotalPages: 0,

    isLoadingSimilar: false,
    errorSimilar: undefined,
    dataSimilarFilms: [] as TMovieItem[],
    similarTotalPages: 0,

    isLoadingTopTVList: false,
    errorTopTVList: undefined,
    dataTopTVList: [] as TMovieItem[],
    topTVListTotalPages: 0,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovieList.pending, (state) => {
                state.errorPopular = undefined;
                state.isLoadingPopular = true;
            })
            .addCase(fetchPopularMovieList.fulfilled, (state, action: PayloadAction<TResponseMovieList>) => {
                state.isLoadingPopular = false;
                state.dataPopularFilms = action.payload.results;
                state.popularTotalPages = action.payload.total_pages;
            })
            .addCase(fetchPopularMovieList.rejected, (state, action) => {
                state.errorPopular = action.payload;
                state.isLoadingPopular = false;
            })

            .addCase(fetchTopMovieList.pending, (state) => {
                state.errorTop = undefined;
                state.isLoadingTop = true;
            })
            .addCase(fetchTopMovieList.fulfilled, (state, action: PayloadAction<TResponseMovieList>) => {
                state.isLoadingTop = false;
                state.dataTopFilms = action.payload.results;
                state.topTotalPages = action.payload.total_pages;
            })
            .addCase(fetchTopMovieList.rejected, (state, action) => {
                state.errorTop = action.payload;
                state.isLoadingTop = false;
            })

            .addCase(fetchSimilarMovieList.pending, (state) => {
                state.errorSimilar = undefined;
                state.isLoadingSimilar = true;
            })
            .addCase(fetchSimilarMovieList.fulfilled, (state, action: PayloadAction<TResponseMovieList>) => {
                state.isLoadingSimilar = false;
                state.dataSimilarFilms = action.payload.results;
                state.similarTotalPages = action.payload.total_pages;
            })
            .addCase(fetchSimilarMovieList.rejected, (state, action) => {
                state.errorSimilar = action.payload;
                state.isLoadingSimilar = false;
            })

            .addCase(fetchTopTVList.pending, (state) => {
                state.errorTopTVList = undefined;
                state.isLoadingTopTVList = true;
            })
            .addCase(fetchTopTVList.fulfilled, (state, action: PayloadAction<TResponseMovieList>) => {
                state.isLoadingTopTVList = false;
                state.dataTopTVList = action.payload.results;
                state.topTVListTotalPages = action.payload.total_pages;
            })
            .addCase(fetchTopTVList.rejected, (state, action) => {
                state.errorTopTVList = action.payload;
                state.isLoadingTopTVList = false;
            });
    },
});

export const { actions: movieActions } = movieSlice;
export const { reducer: movieReducer } = movieSlice;
