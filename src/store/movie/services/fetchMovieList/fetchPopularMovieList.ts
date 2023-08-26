import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchPopularMovieList = createAsyncThunk<TResponseMovieList, number, ThunkConfig<string>>(
    "movie/fetchPopularMovieList",
    async (page, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>(`/movie/popular`, { params: { page } });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchPopularMovieList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке 'popular' фильмов");
        }
    },
);
