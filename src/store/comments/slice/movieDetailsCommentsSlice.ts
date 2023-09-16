import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCommentsByMovieId } from "../services/fetchCommentsByMovieId/fetchCommentsByMovieId";
import { StateSchema } from "providers/storeProvider/StateSchema";
import { MovieDetailsCommentsSchema } from "../types/comment";
import { Comment } from "../types/comment";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

console.log("commentsAdapter.getInitialState(): ", commentsAdapter.getInitialState());

export const getMovieComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.movieDetailsComments || commentsAdapter.getInitialState(),
);

// Rename the exports for readability in component usage
/* export const {
    selectById: selectMovieDetailsCommentsById,
    selectIds: selectMovieDetailsCommentsIds,
    selectEntities: selectMovieDetailsCommentsEntities,
    selectAll: selectAllMovieDetailsComments,
    selectTotal: selectTotalDetailsCommentsMovies,
} = commentsAdapter.getSelectors<StateSchema>((state) => state.movieDetailsComments || commentsAdapter.getInitialState());
 */
const movieDetailsCommentsSlice = createSlice({
    name: "fetchMovieDetailsCommentsById",
    initialState: commentsAdapter.getInitialState<MovieDetailsCommentsSchema>({
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByMovieId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByMovieId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByMovieId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: movieDetailsCommentsReducer } = movieDetailsCommentsSlice;
