import { FC, useEffect, useState } from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import { TCategoryType, TListType } from "../../api/types";

type MovieListProps = {
    category: TCategoryType;
    listType: TListType;
    id?: number;
};

const MovieList: FC<MovieListProps> = ({ category, listType, id }) => {
    useEffect(() => {
        const params = { page: 1 };

        switch (category) {
            case "movie":
                // getMovieList(listType, { params }, id);
                break;
            case "tv":
                //getTVList(listType, { params });
                break;
        }
    }, [category, listType, id]);

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
                        {[].map((item, i) => (
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
                        {[].map((item, i) => (
                            <SwiperSlide key={i}>
                                <MovieCard movieItem={item} category={category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ))}
            {category === "movie" && listType === "similar" && (
                <>
                    {[].length > 0 ? (
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
                    ) : (
                        <div>no matches </div>
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
                        {[].map((item, i) => (
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
