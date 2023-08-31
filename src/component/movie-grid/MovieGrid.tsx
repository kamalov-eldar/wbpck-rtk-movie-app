import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import "./MovieGrid.scss";
import MovieCard from "../movie-card/MovieCard";

import { ButtonTheme, Button } from "../button/Button";
import MovieSearch from "../movie-search/MovieSearch";
import { TCategoryType, TListType } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import StatusUpload from "component/status-upload/StatusUpload";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";
import { selectMovieError, selectMovieIsLoading, selectUpcomingMovieList } from "store/movie/selectors/selectMovie";

type MovieGridProps = {
    category: TCategoryType | undefined;
    listType: TListType | undefined;
};

const MovieGrid: FC<MovieGridProps> = ({ category, listType }) => {
    const [page, setPage] = useState(1);
    const { keyword: keywordUrl } = useParams<{ keyword: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (keywordUrl) {
            navigate(`/`);
        }
    }, []);

    useEffect(() => {
        if (keywordUrl === "") {
            const params = { page: 1 };
            //if (category === "tv" && listType) getTVList(listType, { params });
            //if (category === "movie" && listType) getMovieList(listType, { params });
        } else {
            const params = {
                page: 1,
                query: keywordUrl,
            };

            if (category) {
                //searchMovie(category, { params });
            }
            if (listType === "upcoming") {
                dispatch(fetchMovieList({ listType, page: 1 }));
                //getMovieList(listType, { params });
                // setKeyword("");
            }
        }
        return () => {
            setPage(1);
            // if (listType) resetMoviesList(listType);
        };
    }, [category, listType]);

    const movieUpcomingList = useSelector(selectUpcomingMovieList);
    const isLoadingUpcoming = useSelector(selectMovieIsLoading);
    const errorUpcoming = useSelector(selectMovieError);

    useEffect(() => {
        // setKeyword("");
    }, [category]);

    /* const loadMore = useCallback(() => {
        if (keyword === "") {
            const params = {
                page: page + 1,
            };
            if (category === "movie" && listType) getMovieList(listType, { params });
            if (category === "tv" && listType) getTVList(listType, { params });
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            if (category) {
                searchMovie(category, { params });
            }
        }
        setPage(page + 1);
    }, [page, category, keyword, listType]); */

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

    /*   const dataMovieList = useMemo(() => {
        switch (listType) {
            case "popular":
                return dataPopularMovieList;
            case "top_rated":
                return dataTopMovieList;
            case "upcoming":
                return dataUpcomingMovieList;

            default:
                return undefined;
        }
    }, [listType, dataPopularMovieList, dataTopMovieList, dataUpcomingMovieList]); */

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

    if (isLoadingUpcoming) {
        return <StatusUpload text={"Loading ..."} />;
    }

    if (errorUpcoming) {
        return <StatusUpload text={"Rejected upload - Enable vpn in browser "} />;
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={category} />
            </div>

            <div className="movie-grid">
                {category === "movie" && (
                    <>
                        {movieUpcomingList &&
                            movieUpcomingList.map((item, i) => <MovieCard category={category} movieItem={item} key={item.id} />)}
                    </>
                )}
                {category === "tv" && (
                    <>
                        {/*  {[].map((item, i) => {
                            return <MovieCard category={category} movieItem={item} key={item.id} />;
                        })} */}
                    </>
                )}
            </div>
            <div className="movie-grid__loadmore">
                <Button theme={ButtonTheme.OUTLINE} className="small" onClick={() => console.log("onClick")}>
                    Load more
                </Button>
            </div>
        </>
    );
};

export default MovieGrid;
