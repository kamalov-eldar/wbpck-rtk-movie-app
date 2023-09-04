import { FC, useEffect } from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import { TCategoryType, TListType } from "../../api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    selectMovieError,
    selectMovieErrorStatus,
    selectMovieIsLoading,
    selectPopularMovieList,
    selectSimilarMovieList,
    selectTopMovieList,
} from "store/movie/selectors/selectMovie";
import { selectTopTVList, selectTopTVListError, selectTopTVListIsLoading } from "store/movie/selectors/selectTopTVList";
import { fetchTopTVList } from "store/movie/services/fetchMovieList/fetchTopTVList";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";
import MovieCard2 from "component/movie-card/MovieCard2";

type MovieListProps = {
    category?: TCategoryType;
    listType: TListType;
    id?: number;
};

const MovieList: FC<MovieListProps> = ({ category = "movie", listType, id }) => {
    // console.log("MovieList: ");
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

    const isLoadingMovieList = useSelector(selectMovieIsLoading);
    const errorStatus = useSelector(selectMovieErrorStatus);

    const moviePopularList = useSelector(selectPopularMovieList);

    const movieTopList = useSelector(selectTopMovieList);

    const movieSimilarList = useSelector(selectSimilarMovieList);

    const topTVList = useSelector(selectTopTVList);
    const isLoadingTopTVList = useSelector(selectTopTVListIsLoading);
    const errorTopTVList = useSelector(selectTopTVListError);

    if (isLoadingMovieList) {
        return <span className="loader__text">Loading...</span>;
    }

    if (errorStatus) {
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
