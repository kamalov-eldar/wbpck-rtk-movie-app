import { FC, memo, useCallback, useEffect } from "react";
import cls from "./MovieGrid.module.scss";
import MovieCard from "../movie-card/MovieCard";

import { ButtonTheme, Button } from "../button/Button";
import MovieSearch from "../movie-search/MovieSearch";
import { TCategoryType, TListType, TMovieItem } from "../../api/types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { paginationActions } from "store/pagination/slice/paginationSlice";
import { SvgSpinners } from "assets/svg/SvgSpinners";
import StatusUpload from "component/status-upload/StatusUpload";
import { IError } from "store/movie/types/movie";
import { useSelector } from "react-redux";
import { getViewCards } from "store/viewCards/selectors/viewCardsSelectors";
import { ViewCardsType } from "component/SwitchingTypeCards/SwitchingTypeCards";
import classNames from "classnames";
import MovieCardFlex from "./MovieCardFlex/MovieCardFlex";

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
    const view = useSelector(getViewCards);

    useEffect(() => {
        if (keywordUrl) {
            navigate(`/`);
        }
    }, []);

    useEffect(() => {
        // setKeyword("");
    }, [category]);

    const dispatch = useAppDispatch();

    const loadMore = useCallback(() => {
        dispatch(paginationActions.nextPage());
    }, []);

    const viewType = {
        [cls["movie-grid"]]: view === ViewCardsType.GRID,
        [cls["movie-flex"]]: view === ViewCardsType.LIST,
    };

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={category} />
            </div>
            <div className={classNames([viewType])}>
                {/* "movie-grid" */}
                {category === "movie" && (
                    <>
                        {dataMovieList &&
                            dataMovieList.map((item, i) => {
                                return view === ViewCardsType.GRID ? (
                                    <MovieCard category={category} movieItem={item} key={item.id} />
                                ) : (
                                    <MovieCardFlex category={category} movieItem={item} key={item.id} />
                                );
                            })}
                    </>
                )}
            </div>
            {error && (
                <div className="errorBlock">
                    <span className="errorText">{error.messageError}</span>{" "}
                </div>
            )}
            {dataMovieList && dataMovieList?.length > 0 && (
                <div className="movie-grid__loadmore">
                    <Button disabled={false /* isLoading */} theme={ButtonTheme.LOAD} className="small" onClick={loadMore}>
                        {false /* isLoading */ ? <SvgSpinners /> : "Load more"}
                    </Button>
                </div>
            )}
        </>
    );
};

export default memo(MovieGrid);

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
