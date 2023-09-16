import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategoryType, TMovieDetails } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface IParams {
    category: TCategoryType;
    id: number;
}

export const fetchMovieDetails = createAsyncThunk<TMovieDetails, IParams, ThunkConfig<string>>(
    "movieDetails/fetchMovieDetails",
    async ({ id, category }, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TMovieDetails>(category + "/" + id, { params: {} });
            //   console.log("response: ", response);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchMovieDetails: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке Movie Details");
        }
    },
);
