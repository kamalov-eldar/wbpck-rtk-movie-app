export type TListType = "popular" | "top_rated" | "upcoming" | "similar" | "now_playing";
export type TCategoryType = "movie" | "tv";
export type TypeList = "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS" | "TOP_250_BEST_FILMS";

export type TGenre = {
    name: string;
};

export type TCategoryItem = {
    title: string;
    category: TCategoryType;
    listType: TListType;
};

export type TMovieDetail = {
    adult: boolean;
    backdrop_path: string;
    genres: Array<TGenre>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
};

export type TMovieItem = {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    release_date?: string;
};

export type TItemTV = {
    id: number;
    name: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
};

export type TVideo = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export interface TResponseVideosList {
    results: TVideo[];
    id: number;
}

export type TCast = {
    profile_path: string;
    name: string;
};

export interface TResponseMovieList {
    results: TMovieItem[];
    total_pages: number;
    listType?: TListType;
}
export interface TResponseMovieDetail {
    result: TMovieDetail;
}

export interface TResponseTVList {
    results: TItemTV[];
    page: number;
    total_pages: number;
}

export interface TResponseCastsList {
    cast: TCast[];
}

export type TIMDbMovie = {
    id: number;
    fullTitle: string;
    image: string;
    title: string;
    year: string;
    starList: Array<{ id: null; name: string }>;
    genreList: Array<{ key: string; value: string }>;
};

export type TImdbComingSoonListResponse = {
    data: {
        items: TIMDbMovie[];
    };
};

export interface IError {
    status: boolean;
    message: string;
}
