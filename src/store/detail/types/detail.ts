import { TMovieDetail, TVideo } from "api/types";

export interface DetailSchema {
    error?: string;
    isLoading: boolean;
    data?: TMovieDetail;
}
