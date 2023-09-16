import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../movie-card/MovieCard";
import { IError } from "store/movie/types/movie";
import { TCategoryType, TListType, TMovieItem } from "../../api/types";

import "./MovieList.scss";

type MovieListProps = {
    category?: TCategoryType;
    listType: TListType;
    id?: number;
    movieList: TMovieItem[] | undefined;
    isLoading: boolean;
    error: IError | undefined;
};

const MovieList: FC<MovieListProps> = ({ category, listType, movieList, isLoading, error }) => {
    // console.log("listType: ", { category, listType, error });
    // console.log("MovieList: ");

    if (isLoading) {
        return <span className="loader__text">Loading...</span>;
    }

    if (error) {
        return <span className="loader__text errorText">{error.messageError}</span>;
    }

    return (
        <>
            <div className={`movie-list ${category} ${listType} `}>
                {category === "movie" && movieList && movieList?.length && (
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
            </div>
        </>
    );
};

export default MovieList;
