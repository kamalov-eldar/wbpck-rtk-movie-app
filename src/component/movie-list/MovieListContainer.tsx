import { FC, useCallback, useEffect, useMemo } from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import { TCategoryType, TListType } from "../../api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    selectPopularError,
    selectPopularErrorStatus,
    selectPopularIsLoading,
    selectPopularMovieList,
    selectSimilarError,
    selectSimilarErrorStatus,
    selectSimilarIsLoading,
    selectSimilarMovieList,
    selectTopError,
    selectTopErrorStatus,
    selectTopIsLoading,
    selectTopMovieList,
} from "store/movie/selectors/selectMovie";
import { selectTopTVList, selectTopTVListError, selectTopTVListIsLoading } from "store/movie/selectors/selectTopTVList";
import { fetchTopTVList } from "store/movie/services/fetchMovieList/fetchTopTVList";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "component/button/Button";
import MovieList from "./MovieList";

type MovieListContainerProps = {
    category?: TCategoryType;
    listType: TListType;
    id?: number;
    title: string;
};

const MovieListContainer: FC<MovieListContainerProps> = ({ category = "movie", listType, id, title }) => {
   // console.log("MovieListContainer: ");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
        }
    }, [dispatch]);

    useEffect(() => {
        const params = { page: 1 };
        switch (category) {
            case "movie":
                // getMovieList(listType, { params }, id);
                if (listType === "popular") dispatch(fetchMovieList({ listType, page: 1 }));
                if (listType === "top_rated") dispatch(fetchMovieList({ listType, page: 1 }));
                if (listType === "similar") dispatch(fetchMovieList({ listType, page: 1, id }));
                break;
            case "tv":
                //getTVList(listType, { params }); fetchTopTVList
                if (listType === "top_rated") dispatch(fetchTopTVList(1));
                break;
        }
    }, [category, listType, id, dispatch]);

    const link = "catalog/" + category + "/" + listType;

    const moviePopularList = useSelector(selectPopularMovieList);
    const isLoadingPopular = useSelector(selectPopularIsLoading);
    const errorStatusPopular = useSelector(selectPopularErrorStatus);
    const errorPopular = useSelector(selectPopularError);

    const movieTopList = useSelector(selectTopMovieList);
    const isLoadingTop = useSelector(selectTopIsLoading);
    const errorStatusTop = useSelector(selectTopErrorStatus);
    const errorTop = useSelector(selectTopError);

    const movieSimilarList = useSelector(selectSimilarMovieList);
    const isLoadingSimilar = useSelector(selectSimilarIsLoading);

    const errorStatusSimilar = useSelector(selectSimilarErrorStatus);
    const errorSimilar = useSelector(selectSimilarError);

    const topTVList = useSelector(selectTopTVList);
    const isLoadingTopTVList = useSelector(selectTopTVListIsLoading);
    const errorTopTVList = useSelector(selectTopTVListError);

    const movieList = useMemo(() => {
        // if (category === "movie")
        switch (listType) {
            case "popular":
                return moviePopularList;
            case "top_rated":
                return movieTopList;
            case "similar":
                return movieSimilarList;
            /*  case "upcoming":
                    return movieTopList; */
            default:
                break;
        }
    }, [moviePopularList, movieTopList, movieSimilarList]);

    const isLoading = useMemo(() => {
        // if (category === "movie")
        switch (listType) {
            case "popular":
                return isLoadingPopular;
            case "top_rated":
                return isLoadingTop;
            case "similar":
                return isLoadingSimilar;
            /*  case "upcoming":
                    return movieTopList; */
            default:
                return true;
        }
    }, [isLoadingPopular, isLoadingTop, isLoadingSimilar]);

    const error = useMemo(() => {
        // if (category === "movie")
        switch (listType) {
            case "popular":
                return errorPopular;
            case "top_rated":
                return errorTop;
            case "similar":
                return errorSimilar;
            /*  case "upcoming":
                    return movieTopList; */
            default:
                return undefined;
        }
    }, [errorPopular, errorPopular, errorSimilar]);

    /*  console.log("isLoading: ", isLoading);
    console.log("isErrorStatus: ", isErrorStatus); */

    return (
        <>
            <div className="section__header mb-2">
                <h2>{title}</h2>
                <Link to={link}>
                    <Button
                        disabled={isLoading}
                        theme={ButtonTheme.OUTLINE}
                        className="small">
                        View More
                    </Button>
                </Link>
            </div>

            <MovieList movieList={movieList} isLoading={isLoading} error={error} category={category} listType={listType} />
        </>
    );
};

export default MovieListContainer;
