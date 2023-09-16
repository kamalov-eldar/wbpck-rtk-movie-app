import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "../../types/comment";
import { ThunkConfig } from "providers/storeProvider/StateSchema";

export const fetchCommentsByMovieId = createAsyncThunk<Comment[], number | undefined, ThunkConfig<string>>(
    "movieDetails/fetchCommentsByMovieId",
    async (movieId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!movieId) {
            return rejectWithValue("error");
        }

        try {
            const response = await extra.api.get<Comment[]>("/comments", {
                params: {
                    movieId,
                    _expand: "user",// для того чтиоб получить данные юзера по его id
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
