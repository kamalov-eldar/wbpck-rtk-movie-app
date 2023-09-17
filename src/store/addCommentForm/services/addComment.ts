import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "providers/storeProvider/StateSchema";
import { selectUserAuthData } from "store/user/selector/selectUserAuthData";
import { Comment } from "../../comments/types/comment";
import { fetchCommentsByMovieId } from "store/comments/services/fetchCommentsByMovieId/fetchCommentsByMovieId";

interface addCommentProps {
    text: string;
    movieId: number;
}

export const addComment = createAsyncThunk<Comment, addCommentProps, ThunkConfig<string>>(
    "addCommentForm/addComment",
    async ({ text, movieId }, thunkApi) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkApi;

        const userData = selectUserAuthData(getState());

        if (!userData || !text || !movieId) {
            return rejectWithValue("no data");
        }

        try {
            const response = await extra.api.post<Comment>("/comments", {
                movieId,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByMovieId(movieId));

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
