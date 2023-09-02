import { createSlice } from "@reduxjs/toolkit";
import { PaginationSchema } from "../types/paginationSchema";

const initialState: PaginationSchema = {
    page: 1,
};

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        clearPage: (state) => {
            state.page = 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: paginationActions } = paginationSlice;
export const { reducer: paginationReducer } = paginationSlice;
