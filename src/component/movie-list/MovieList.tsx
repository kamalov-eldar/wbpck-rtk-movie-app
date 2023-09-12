import { FC, useCallback, useEffect, useMemo } from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import { TCategoryType, TListType, TMovieItem } from "../../api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    selectPopularErrorStatus,
    selectPopularIsLoading,
    selectPopularMovieList,
    selectSimilarErrorStatus,
    selectSimilarIsLoading,
    selectSimilarMovieList,
    selectTopErrorStatus,
    selectTopIsLoading,
    selectTopMovieList,
} from "store/movie/selectors/selectMovie";
import { selectTopTVList, selectTopTVListError, selectTopTVListIsLoading } from "store/movie/selectors/selectTopTVList";
import { fetchTopTVList } from "store/movie/services/fetchMovieList/fetchTopTVList";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "component/button/Button";
import { IError } from "store/movie/types/movie";

type MovieListProps = {
    category?: TCategoryType;
    listType: TListType;
    id?: number;
    movieList: TMovieItem[] | undefined;
    isLoading: boolean;
    error: IError | undefined;
};

const MovieList: FC<MovieListProps> = ({ category = "movie", listType, movieList, isLoading, error }) => {
    // console.log("MovieList: ");

    if (isLoading) {
        return <span className="loader__text">Loading...</span>;
    }

    if (error) {
        return <span className="loader__text">Error</span>;
    }

    return (
        <>
            <div className={`movie-list ${category} ${listType} `}>
                {category === "movie" && movieList && movieList?.length > 0 && (
                    <Swiper
                        // modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        // autoplay={{ delay: 3000 }}
                        className={"Swiper"}>
                        {movieList.map((item, i) => (
                            <SwiperSlide key={i} className={"className-Swiper"}>
                                <MovieCard movieItem={item} category={category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {/* {category === "tv" && listType === "top_rated" ? (
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
                )} */}
            </div>
        </>
    );
};

export default MovieList;
