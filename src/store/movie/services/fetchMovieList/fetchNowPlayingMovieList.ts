import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchNowPlayingMovieList = createAsyncThunk<TResponseMovieList, number, ThunkConfig<string>>(
    "movie/fetchNowPlayingMovieList",
    async (page, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>(`/movie/now_playing`, { params: { page } });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchNowPlayingMovieList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке 'NowPlaying' фильмов");
        }
    },
);
// now_playing
