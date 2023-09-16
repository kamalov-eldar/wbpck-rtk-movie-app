import { User } from "store/user/types/user";
import { EntityState } from "@reduxjs/toolkit";

export interface Comment {
    id: string;
    user: User;
    text: string;
    movieId: number;
}

export interface MovieDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}