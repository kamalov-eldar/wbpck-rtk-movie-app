import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovieItem, TResponseMovieList } from "api/types";
import { MovieSchema } from "../types/movie";
import { fetchTopTVList } from "../services/fetchMovieList/fetchTopTVList";
import { fetchMovieList } from "../services/fetchMovieList/fetchMovieList";

const initialState: MovieSchema = {
    isLoading: false,
    error: undefined,

    popularTotalPages: 0,
    dataPopularFilms: [] as TMovieItem[],

    nowPlayingTotalPages: 0,
    dataNowPlayingFilms: [] as TMovieItem[],

    dataTopFilms: [] as TMovieItem[],
    topTotalPages: 0,

    dataSimilarFilms: [] as TMovieItem[],
    similarTotalPages: 0,

    dataUpcomingFilms: [] as TMovieItem[],
    upcomingTotalPages: 0,

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
            .addCase(fetchMovieList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMovieList.fulfilled, (state, action: PayloadAction<TResponseMovieList>) => {
                state.isLoading = false;
                switch (action.payload.listType) {
                    case "popular":
                        state.dataPopularFilms = action.payload.results;
                        state.popularTotalPages = action.payload.total_pages;
                        break;
                    case "top_rated":
                        state.dataTopFilms = action.payload.results;
                        state.topTotalPages = action.payload.total_pages;
                        break;
                    case "upcoming":
                        state.dataUpcomingFilms = action.payload.results;
                        state.upcomingTotalPages = action.payload.total_pages;
                        break;
                    case "similar":
                        state.dataSimilarFilms = action.payload.results;
                        state.similarTotalPages = action.payload.total_pages;
                        break;
                    case "now_playing":
                        state.dataNowPlayingFilms = action.payload.results;
                        state.nowPlayingTotalPages = action.payload.total_pages;
                        break;
                    default:
                        break;
                }
            })
            .addCase(fetchMovieList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
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
