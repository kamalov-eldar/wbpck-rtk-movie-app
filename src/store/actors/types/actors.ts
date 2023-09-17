import { TActor } from "api/types";

export interface ActorsSchema {
    error?: string;
    isLoading: boolean;
    data?: TActor[];
}
