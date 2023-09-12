import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovieItem, TResponseMovieList } from "api/types";
import { MovieSchema } from "../types/movie";
import { fetchTopTVList } from "../services/fetchMovieList/fetchTopTVList";
import { fetchMovieList } from "../services/fetchMovieList/fetchMovieList";

const initialState: MovieSchema = {
    isLoadingPopular: true,
    errorPopular: undefined,
    popularTotalPages: 0,
    dataPopularFilms: [] as TMovieItem[],

    errorNowPlaying: undefined,
    isLoadingNowPlaying: true,
    nowPlayingTotalPages: 0,
    dataNowPlayingFilms: [] as TMovieItem[],

    errorTop: undefined,
    isLoadingTop: true,
    dataTopFilms: [] as TMovieItem[],
    topTotalPages: 0,

    errorSimilar: undefined,
    isLoadingSimilar: true,
    dataSimilarFilms: [] as TMovieItem[],
    similarTotalPages: 0,

    errorUpcoming: undefined,
    isLoadingUpcoming: true,
    dataUpcomingFilms: [] as TMovieItem[],
    upcomingTotalPages: 0,

    isLoadingTopTVList: true,
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
            .addCase(fetchMovieList.pending, (state, action) => {
                switch (action.meta.arg.listType) {
                    case "popular":
                        state.errorPopular = undefined;
                        state.isLoadingPopular = true;
                        break;
                    case "top_rated":
                        state.errorTop = undefined;
                        state.isLoadingTop = true;
                        break;
                    case "upcoming":
                        state.errorUpcoming = undefined;
                        state.isLoadingUpcoming = true;
                        break;
                    case "similar":
                        state.errorSimilar = undefined;
                        state.isLoadingSimilar = true;
                        break;
                    case "now_playing":
                        state.errorNowPlaying = undefined;
                        state.isLoadingNowPlaying = true;
                        break;
                    default:
                        break;
                }
            })
            .addCase(fetchMovieList.fulfilled, (state, action: PayloadAction<TResponseMovieList>) => {
                switch (action.payload.listType) {
                    case "popular":
                        state.isLoadingPopular = false;
                        state.dataPopularFilms?.push(...action.payload.results);
                        state.popularTotalPages = action.payload.total_pages;
                        break;
                    case "top_rated":
                        state.isLoadingTop = false;
                        state.dataTopFilms?.push(...action.payload.results);
                        state.topTotalPages = action.payload.total_pages;
                        break;
                    case "upcoming":
                        state.isLoadingUpcoming = false;
                        state.dataUpcomingFilms?.push(...action.payload.results);
                        state.upcomingTotalPages = action.payload.total_pages;
                        break;
                    case "similar":
                        state.isLoadingSimilar = false;
                        state.dataSimilarFilms?.push(...action.payload.results);
                        state.similarTotalPages = action.payload.total_pages;
                        break;
                    case "now_playing":
                        state.isLoadingNowPlaying = false;
                        state.dataNowPlayingFilms?.push(...action.payload.results);
                        state.nowPlayingTotalPages = action.payload.total_pages;
                        break;
                    default:
                        break;
                }
            })
            .addCase(fetchMovieList.rejected, (state, action) => {
                switch (action.meta.arg.listType) {
                    case "popular":
                        state.errorPopular = action.payload;
                        state.isLoadingPopular = false;
                        break;
                    case "top_rated":
                        state.errorTop = action.payload;
                        state.isLoadingTop = false;
                        break;
                    case "upcoming":
                        state.errorUpcoming = action.payload;
                        state.isLoadingUpcoming = false;
                        break;
                    case "similar":
                        state.errorSimilar = action.payload;
                        state.isLoadingSimilar = false;
                        break;
                    case "now_playing":
                        state.errorNowPlaying = action.payload;
                        state.isLoadingNowPlaying = false;
                        break;
                    default:
                        break;
                }
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
