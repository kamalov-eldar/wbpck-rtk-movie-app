import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchSimilarMovieList = createAsyncThunk<TResponseMovieList, number, ThunkConfig<string>>(
    "movie/fetchSimilarMovieList",
    async (page, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>(`/movie/similar`, { params: { page } });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchSimilarMovieList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке 'Similar' фильмов");
        }
    },
);
