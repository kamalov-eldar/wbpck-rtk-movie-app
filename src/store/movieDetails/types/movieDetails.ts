import { TMovieDetails } from "api/types";

export interface MovieDetailsSchema {
    error?: string;
    isLoading: boolean;
    data?: TMovieDetails;
}
