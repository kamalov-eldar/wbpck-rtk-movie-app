import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ViewCardsSchema } from "../types/viewCardsSchema";
import { ViewCardsType } from "component/SwitchingTypeCards/SwitchingTypeCards";

const initialState: ViewCardsSchema = {
    view: ViewCardsType.GRID,
};

export const viewCardsSlice = createSlice({
    name: "viewCards",
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ViewCardsType>) => {
            state.view = action.payload;
            localStorage.setItem("viewCards", action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem("viewCards") as ViewCardsType;
        },
    },
});

export const { actions: viewCardsActions } = viewCardsSlice;
export const { reducer: viewCardsReducer } = viewCardsSlice;
