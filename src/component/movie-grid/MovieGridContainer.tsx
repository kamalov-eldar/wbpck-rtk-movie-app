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
    selectSimilarIsLoading,
    selectTopError,
    selectTopIsLoading,
    selectTopMovieList,
    selectUpcomingError,
    selectUpcomingIsLoading,
    selectUpcomingMovieList,
} from "store/movie/selectors/selectMovie";
import { paginationActions } from "store/pagination/slice/paginationSlice";
import { selectPage } from "store/pagination/selectors/selectPage/selectPage";
import MovieGrid from "./MovieGrid";

type MovieGridContainerProps = {
    category: TCategoryType | undefined;
    listType: TListType | undefined;
};

const MovieGridContainer: FC<MovieGridContainerProps> = ({ category, listType }) => {
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

    const page = useSelector(selectPage);

    const isLoading = useMemo(() => {
        switch (listType) {
            case "popular":
                return isLoadingPopular;
            case "top_rated":
                return isLoadingTop;
            case "similar":
                return isLoadingUpcoming;
            /*  case "upcoming":
                    return movieTopList; */
            default:
                return true;
        }
    }, [isLoadingPopular, isLoadingTop, isLoadingUpcoming]);

    const error = useMemo(() => {
        switch (listType) {
            case "popular":
                return errorPopular;
            case "top_rated":
                return errorTop;
            case "similar":
                return errorUpcoming;
            /*  case "upcoming":
                    return movieTopList; */
            default:
                return undefined;
        }
    }, [errorPopular, errorPopular, errorUpcoming]);

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
            default:
                return undefined;
        }
    }, [listType, moviePopularList, movieTopList, movieUpcomingList]);

    if (!dataMovieList) {
        return <StatusUpload text={"Rejected upload - Enable vpn in browser "} />;
    }

    return <MovieGrid error={error} isLoading={isLoading} dataMovieList={dataMovieList} category={category} listType={listType} />;
};

export default MovieGridContainer;
