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
        //  console.log("page-fetchMovieList: ", page);
        try {
            const response = await thunkApi.extra.apiTmdb.get<TResponseMovieList>("/movie/" + (id ? `${id}/` : "") + listType, {
                params: { page },
            });
            //  console.log("response: ", `${listType}`, response);
            if (response.data && listType === "popular") {
                response.data.results.forEach((item) => {
                    //console.log("item: ", item);
                    /*   thunkApi.extra.api.post("/movies", {
                        ...item,
                    }); */
                });
            }

            if (!response.data) {
                throw new Error();
            }
            const data = { ...response.data, listType } as TResponseMovieList;

            return data;
        } catch (error) {
            //console.log("error-fetchMovieList: ", "listType", listType, error);
            return thunkApi.rejectWithValue({ statusError: true, messageError: "Произошла ошибка при загрузке фильмов" });
        }
    },
);
