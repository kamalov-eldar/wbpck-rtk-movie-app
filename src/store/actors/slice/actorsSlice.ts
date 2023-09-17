import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TResponseActorsList } from "api/types";
import { ActorsSchema } from "store/actors/types/actors";
import { fetchActorsList } from "store/actors/fetchActorsList/fetchActorsList";

const initialState: ActorsSchema = {
    isLoading: true,
    error: undefined,
    data: undefined,
};

export const actorsSlice = createSlice({
    name: "actors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActorsList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchActorsList.fulfilled, (state, action: PayloadAction<TResponseActorsList>) => {
                state.isLoading = false;
                state.data = action.payload.cast;
            })
            .addCase(fetchActorsList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: actorsActions } = actorsSlice;
export const { reducer: actorsReducer } = actorsSlice;
