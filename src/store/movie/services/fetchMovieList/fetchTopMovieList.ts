import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchTopMovieList = createAsyncThunk<TResponseMovieList, number, ThunkConfig<string>>(
    "movie/fetchTopMovieList",
    async (page, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>(`/movie/top_rated`, { params: { page } });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchTopMovieList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке 'top' фильмов");
        }
    },
);
