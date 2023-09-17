import { createAsyncThunk } from "@reduxjs/toolkit";
import { TListType, TResponseActorsList } from "api/types";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

interface Params {
    page: number;
    listType: TListType;
}

export const fetchActorsList = createAsyncThunk<TResponseActorsList, number, ThunkConfig<string>>(
    "actors/fetchActorsList",
    async (id, thunkApi) => {
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseActorsList>(`/movie/${id}/credits`, { params: {} });
            console.log("response: ", response);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log("error-fetchActorsList: ", error);
            return thunkApi.rejectWithValue("Произошла ошибка при загрузке Actors");
        }
    },
);
