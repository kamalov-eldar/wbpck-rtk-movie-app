import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchTopTVList = createAsyncThunk<TResponseMovieList, number, ThunkConfig<string>>(
    "movie/fetchTopTVList",
    async (page, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>(`/tv/top_rated`, { params: { page } });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            // console.log("error-fetchTopTVList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке 'top' тв программ");
        }
    },
);
