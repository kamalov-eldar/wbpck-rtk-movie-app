import { FC, useCallback, useEffect, useMemo } from "react";

import { TCategoryType, TListType } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import StatusUpload from "component/status-upload/StatusUpload";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";
import {
    selectPopularError,
    selectPopularIsLoading,
    selectPopularMovieList,
    selectSimilarError,
    selectSimilarIsLoading,
    selectSimilarMovieList,
    selectTopError,
    selectTopIsLoading,
    selectTopMovieList,
    selectUpcomingError,
    selectUpcomingIsLoading,
    selectUpcomingMovieList,
} from "store/movie/selectors/selectMovie";
import { paginationActions } from "store/pagination/slice/paginationSlice";
import { selectPage } from "store/pagination/selectors/selectPage/selectPage";
import MovieContent from "./MovieContent";

type MovieContainerProps = {
    category: TCategoryType | undefined;
    listType: TListType | undefined;
};

const MovieContainer: FC<MovieContainerProps> = ({ category, listType }) => {
    const { keyword: keywordUrl } = useParams<{ keyword: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const movieUpcomingList = useSelector(selectUpcomingMovieList);
    const isLoadingUpcoming = useSelector(selectUpcomingIsLoading);
    const errorUpcoming = useSelector(selectUpcomingError);

    const movieTopList = useSelector(selectTopMovieList);
    const isLoadingTop = useSelector(selectTopIsLoading);
    const errorTop = useSelector(selectTopError);

    const moviePopularList = useSelector(selectPopularMovieList);
    const isLoadingPopular = useSelector(selectPopularIsLoading);
    const errorPopular = useSelector(selectPopularError);

    const movieSimilarList = useSelector(selectSimilarMovieList);
    const isLoadingSimilar = useSelector(selectSimilarIsLoading);
    const errorSimilar = useSelector(selectSimilarError);

    const page = useSelector(selectPage);

    const isLoading = useMemo(() => {
        switch (listType) {
            case "popular":
                return isLoadingPopular;
            case "top_rated":
                return isLoadingTop;
            case "similar":
                return isLoadingSimilar;
            case "upcoming":
                return isLoadingUpcoming;
            default:
                return true;
        }
    }, [isLoadingPopular, isLoadingTop, isLoadingUpcoming, isLoadingSimilar, listType]);

    const error = useMemo(() => {
        switch (listType) {
            case "popular":
                return errorPopular;
            case "top_rated":
                return errorTop;
            case "similar":
                return errorSimilar;
            case "upcoming":
                return errorUpcoming;
            default:
                return undefined;
        }
    }, [errorPopular, errorPopular, errorUpcoming, errorSimilar, listType]);

    useEffect(() => {
        if (keywordUrl) {
            navigate(`/`);
        }
        return () => {
            dispatch(paginationActions.clearPage());
        };
    }, []);

    useEffect(() => {
        if (listType) dispatch(fetchMovieList({ listType, page }));
        /*  if (keywordUrl === "") {
            if (listType) dispatch(fetchMovieList({ listType, page }));
        } else {
            const params = {
                page: 1,
                query: keywordUrl,
            };
        } */
    }, [page, listType]);

    useEffect(() => {
        // setKeyword("");
    }, [category]);

    const dataMovieList = useMemo(() => {
        switch (listType) {
            case "popular":
                return moviePopularList;
            case "top_rated":
                return movieTopList;
            case "upcoming":
                return movieUpcomingList;
            case "similar":
                return movieSimilarList;
            default:
                return undefined;
        }
    }, [listType, moviePopularList, movieTopList, movieUpcomingList, movieSimilarList]);

    if (!dataMovieList) {
        return <StatusUpload text={"Rejected upload - Enable vpn in browser "} />;
    }

    return <MovieContent error={error} isLoading={isLoading} dataMovieList={dataMovieList} category={category} listType={listType} />;
};

export default MovieContainer;
