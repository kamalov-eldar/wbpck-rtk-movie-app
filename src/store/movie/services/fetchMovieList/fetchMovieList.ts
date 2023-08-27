import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface Params {
    page: number;
    listType: TListType;
}

export const fetchMovieList = createAsyncThunk<TResponseMovieList, Params, ThunkConfig<string>>(
    "movie/fetchMovieList",
    async ({ page, listType }, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>(`/movie/${listType}`, { params: { page } });

            if (!response.data) {
                throw new Error();
            }
            const data = { ...response.data, listType } as TResponseMovieList;

            return data;
        } catch (error) {
            console.log("error-fetchMovieList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке фильмов");
        }
    },
);
// now_playing
