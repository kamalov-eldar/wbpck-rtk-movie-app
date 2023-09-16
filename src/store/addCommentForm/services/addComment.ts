import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "providers/storeProvider/StateSchema";
import { selectUserAuthData } from "store/user/selector/selectUserAuthData";
import { Comment } from "../../comments/types/comment";

interface addCommentProps {
    text: string;
    movieId: number;
}

export const addComment = createAsyncThunk<Comment, addCommentProps, ThunkConfig<string>>(
    "movieDetails/addComment",
    async ({ text, movieId }, thunkApi) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkApi;

        const userData = selectUserAuthData(getState());
        console.log('userData: ', userData);

        if (!userData || !text || !movieId) {
            return rejectWithValue("no data");
        }

        try {
            const response = await extra.api.post<Comment>("/comments", {
                movieId,
                user: userData,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            // dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
