import { createAsyncThunk } from "@reduxjs/toolkit";
import { IError, TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface IParams {
    page: number;
    listType: TListType;
    id?: number;
}

export const fetchMovieList = createAsyncThunk<TResponseMovieList, IParams, ThunkConfig<IError>>(
    "movie/fetchMovieList",
    async ({ page, listType, id }, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>("/movie/" + (id ? `${id}/` : "") + listType, {
                params: { page },
            });

            if (!response.data) {
                throw new Error();
            }
            const data = { ...response.data, listType } as TResponseMovieList;

            return data;
        } catch (error) {
            //console.log("error-fetchMovieList: ", error);
            return thunkApi.rejectWithValue({ status: true, message: "Произошла ошибка при загрузке фильмов" });
        }
    },
);
