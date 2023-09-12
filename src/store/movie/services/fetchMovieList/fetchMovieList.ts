import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseMovieList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";
import { IError } from "store/movie/types/movie";

interface IParams {
    page: number;
    listType: TListType;
    id?: number;
}

export const fetchMovieList = createAsyncThunk<TResponseMovieList, IParams, ThunkConfig<IError>>(
    "movie/fetchMovieList",
    async ({ page, listType, id }, thunkApi) => {
       // console.log("fetchMovieList", listType);
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>("/movie/" + (id ? `${id}/` : "") + listType, {
                params: { page },
            });

          //  console.log("response: ", `${listType}`, response);

            if (!response.data) {
                throw new Error();
            }
            const data = { ...response.data, listType } as TResponseMovieList;

            return data;
        } catch (error) {
            //console.log("error-fetchMovieList: ", error);
            return thunkApi.rejectWithValue({ statusError: true, messageError: "Произошла ошибка при загрузке фильмов" });
        }
    },
);
