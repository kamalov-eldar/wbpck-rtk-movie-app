import { FC, memo, useCallback, useEffect } from "react";
import "./MovieGrid.scss";
import MovieCard from "../movie-card/MovieCard";

import { ButtonTheme, Button } from "../button/Button";
import MovieSearch from "../movie-search/MovieSearch";
import { IError, TCategoryType, TListType, TMovieItem } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { paginationActions } from "store/pagination/slice/paginationSlice";
import { SvgSpinners } from "assets/svg/SvgSpinners";
import StatusUpload from "component/status-upload/StatusUpload";
import MovieCard2 from "component/movie-card/MovieCard2";

type MovieGridProps = {
    category: TCategoryType | undefined;
    listType: TListType | undefined;
    dataMovieList: TMovieItem[] | undefined;
    isLoading: boolean;
    error: IError | undefined;
};

const MovieGrid: FC<MovieGridProps> = ({ category, listType, dataMovieList, isLoading, error }) => {
    const { keyword: keywordUrl } = useParams<{ keyword: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (keywordUrl) {
            navigate(`/`);
        }
        /*  return () => {
            dispatch(paginationActions.clearPage());
        }; */
    }, []);

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

    /*  const dataMovieList = useMemo(() => {
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
    console.log("dataMovieList: ", dataMovieList); */

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

    const dispatch = useAppDispatch();

    const loadMore = useCallback(() => {
        dispatch(paginationActions.nextPage());
    }, []);

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={category} />
            </div>
            <div className="movie-grid">
                {category === "movie" && (
                    <>
                        {dataMovieList &&
                            dataMovieList.map((item, i) => <MovieCard category={category} movieItem={item} key={item.id} />)}
                    </>
                )}
            </div>
            {error && (
                <div className="errorBlock">
                    <span className="errorText">{error.message}</span>{" "}
                </div>
            )}
            {dataMovieList && dataMovieList?.length > 0 && (
                <div className="movie-grid__loadmore">
                    <Button disabled={isLoading} theme={ButtonTheme.LOAD} className="small" onClick={loadMore}>
                        {isLoading ? <SvgSpinners /> : "Load more"}
                    </Button>
                </div>
            )}
        </>
    );
};

export default memo(MovieGrid);
