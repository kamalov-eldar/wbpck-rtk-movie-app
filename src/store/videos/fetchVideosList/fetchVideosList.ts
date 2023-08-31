import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseVideosList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface Params {
    page: number;
    listType: TListType;
}

export const fetchVideosList = createAsyncThunk<TResponseVideosList, number, ThunkConfig<string>>(
    "videos/fetchVideosList",
    async (id, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseVideosList>(`/movie/${id}/videos`, { params: {} });
            console.log("response: ", response);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchVideosList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке videos");
        }
    },
);
