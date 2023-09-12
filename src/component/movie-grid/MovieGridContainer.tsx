import { FC, useCallback, useEffect, useMemo } from "react";
import "./MovieGrid.scss";

import { TCategoryType, TListType } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import StatusUpload from "component/status-upload/StatusUpload";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";
import { selectPopularMovieList, selectTopMovieList, selectUpcomingMovieList } from "store/movie/selectors/selectMovie";
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
    const movieTopList = useSelector(selectTopMovieList);
    const moviePopularList = useSelector(selectPopularMovieList);
    
    const page = useSelector(selectPage);

    // const isLoading = useSelector(selectMovieIsLoading);
    //const error = useSelector(selectMovieError);

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
    }, [page, category, listType]);

    useEffect(() => {
        // setKeyword("");
    }, [category]);

    /*  const listMovie = useMemo(() => {
        switch (listType) {
            case "popular":
                return popularMovieList;
            case "top_rated":
                return topMovieList;
            case "upcoming":
                return upcomingMovieList;

            default:
                return searchList;
        }
    }, [listType, popularMovieList, topMovieList, upcomingMovieList, searchList]); */

    /*   const listTV = useMemo(() => {
        switch (listType) {
            case "popular":
                return popularTVList;
            case "top_rated":
                return topTVList;
            default:
                return searchList;
        }
    }, [listType, popularTVList, topTVList, searchList]); */

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

    /*  const dataTVList = useMemo(() => {
        switch (listType) {
            case "popular":
                return dataPopularTVList;
            case "top_rated":
                return dataTopTVList;

            default:
                return undefined;
        }
    }, [listType, dataPopularTVList, dataTopTVList]); */

    /*  if ((dataTVList?.state || dataMovieList?.state) === "rejected") {
        return <StatusUpload text={"Rejected upload - Enable vpn in browser "} />;
    } */

    /*  if (isLoading) {
        return <StatusUpload text={"Loading MovieGridContainer..."} />;
    } */

    if (!dataMovieList) {
        return <StatusUpload text={"Rejected upload - Enable vpn in browser "} />;
    }

    return (
        <MovieGrid
            error={undefined}
            isLoading={false /* isLoading */}
            dataMovieList={dataMovieList}
            category={category}
            listType={listType}
        />
    );
};

export default MovieGridContainer;
