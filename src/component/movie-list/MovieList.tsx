import { FC, useEffect, useState } from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import { TCategoryType, TListType } from "../../api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchPopularMovieList } from "store/movie/services/fetchMovieList/fetchPopularMovieList";
import { useSelector } from "react-redux";
import {
    selectPopularMovieError,
    selectPopularMovieIsLoading,
    selectPopularMovieList,
} from "store/movie/selectors/selectPopularMovie";
import { fetchTopMovieList } from "store/movie/services/fetchMovieList/fetchTopMovieList";
import { selectTopMovieError, selectTopMovieIsLoading, selectTopMovieList } from "store/movie/selectors/selectTopMovie";
import {
    selectSimilarMovieList,
    selectSimilarMovieIsLoading,
    selectSimilarMovieError,
} from "store/movie/selectors/selectSimilarMovie";
import { fetchSimilarMovieList } from "store/movie/services/fetchMovieList/fetchSimilarMovieList";
import { fetchTopTVList } from "store/movie/services/fetchMovieList/fetchTopTVList";
import { selectTopTVList, selectTopTVListError, selectTopTVListIsLoading } from "store/movie/selectors/selectTopTVList";

type MovieListProps = {
    category: TCategoryType;
    listType: TListType;
    id?: number;
};

const MovieList: FC<MovieListProps> = ({ category, listType, id }) => {
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
                if (listType === "popular") dispatch(fetchPopularMovieList(1));
                if (listType === "top_rated") dispatch(fetchTopMovieList(1));
                if (listType === "similar") dispatch(fetchSimilarMovieList(1));
                break;
            case "tv":
                //getTVList(listType, { params }); fetchTopTVList
                if (listType === "top_rated") dispatch(fetchTopTVList(1));
                break;
        }
    }, [category, listType]);

    const moviePopularList = useSelector(selectPopularMovieList);
    const isLoadingPopular = useSelector(selectPopularMovieIsLoading);
    const errorPopular = useSelector(selectPopularMovieError);

    const movieTopList = useSelector(selectTopMovieList);
    const isLoadingTop = useSelector(selectTopMovieIsLoading);
    const errorTop = useSelector(selectTopMovieError);

    const movieSimilarList = useSelector(selectSimilarMovieList);
    const isLoadingSimilar = useSelector(selectSimilarMovieIsLoading);
    const errorSimilar = useSelector(selectSimilarMovieError);

    const topTVList = useSelector(selectTopTVList);
    const isLoadingTopTVList = useSelector(selectTopTVListIsLoading);
    const errorTopTVList = useSelector(selectTopTVListError);

    if (isLoadingPopular && isLoadingTop) {
        return <span className="loader__text">Loading...</span>;
    }

    if (errorPopular && errorTop) {
        return <span className="loader__text">Error</span>;
    }
    if (!moviePopularList && !movieTopList) {
        return <span className="loader__text">No Data</span>;
    }

    return (
        <div className={`movie-list ${category} ${listType} `}>
            {category === "movie" &&
                (listType === "popular" ? (
                    <Swiper
                        // modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        // autoplay={{ delay: 3000 }}
                    >
                        {moviePopularList &&
                            moviePopularList.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <MovieCard movieItem={item} category={category} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                ) : (
                    <Swiper
                        // modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        // autoplay={{ delay: 3000 }}
                    >
                        {movieTopList &&
                            movieTopList.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <MovieCard movieItem={item} category={category} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                ))}
            {category === "movie" && listType === "similar" && (
                <>
                    {movieSimilarList && movieSimilarList.length > 0 ? (
                        <Swiper
                            // modules={[Autoplay]}
                            grabCursor={true}
                            spaceBetween={10}
                            slidesPerView={"auto"}
                            // autoplay={{ delay: 3000 }}
                        >
                            {movieSimilarList.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <MovieCard movieItem={item} category={category} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div>no matches</div>
                    )}
                </>
            )}
            {category === "tv" && listType === "top_rated" ? (
                <>
                    <Swiper
                        // modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        // autoplay={{ delay: 3000 }}
                    >
                        {topTVList &&
                            topTVList.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <MovieCard movieItem={item} category={category} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </>
            ) : (
                <>
                    <Swiper
                        // modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        // autoplay={{ delay: 3000 }}
                    >
                        {[].map((item, i) => (
                            <SwiperSlide key={i}>
                                <MovieCard movieItem={item} category={category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </div>
    );
};

export default MovieList;
