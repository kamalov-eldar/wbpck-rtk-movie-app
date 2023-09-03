import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategoryType, TListType, TMovieDetail, TResponseVideosList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface IParams {
    category: TCategoryType;
    id: number;
}

export const fetchDetail = createAsyncThunk<TMovieDetail, IParams, ThunkConfig<string>>(
    "detail/fetchDetail",
    async ({id, category}, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TMovieDetail>(category + "/" + id, { params: {} });
         //   console.log("response: ", response);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchDetail: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке Detail");
        }
    },
);
