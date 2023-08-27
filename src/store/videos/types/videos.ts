import { TVideo } from "api/types";

export interface VideosSchema {
    error?: string;
    isLoading: boolean;
    dataVideosList?: TVideo[];
}
