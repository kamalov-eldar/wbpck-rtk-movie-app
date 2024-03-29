import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlideItem from "./Hero-slide-Item/HeroSlideItem";
import { useSelector } from "react-redux";
import {
    selectNowPlayingErrorMessage,
    selectNowPlayingErrorStatus,
    selectNowPlayingIsLoading,
    selectNowPlayingMovieList,
} from "store/movie/selectors/selectMovie";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";

const HeroSlide: FC = () => {
    //console.log("HeroSlide: ");
    SwiperCore.use([Autoplay]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovieList({ listType: "now_playing", page: 1 }));
    }, []);

    const nowPlayingMovieList = useSelector(selectNowPlayingMovieList); // [] as TMovieItem[];
    const isLoading = useSelector(selectNowPlayingIsLoading);
    const errorMessage = useSelector(selectNowPlayingErrorMessage);
    const errorStatus = useSelector(selectNowPlayingErrorStatus);

    if (isLoading) {
        return (
            <div className="loader">
                <h2 className="loader__text">Loading...</h2>
            </div>
        );
    }

    if (errorStatus) {
        return (
            <div className="loader">
                <h2 className="loader__text">Rejected upload - Enable vpn in browser &nbsp;</h2>
            </div>
        );
    }

    if (!nowPlayingMovieList) {
        return (
            <div className="loader">
                <h2 className="loader__text">No Data</h2>
            </div>
        );
    }

    return (
        <div className="hero-slide">
            <>
                <Swiper
                    // modules={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    //autoplay={{ delay: 6000 }}
                >
                    {nowPlayingMovieList.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => <HeroSlideItem item={item} className={`${isActive ? "active" : ""}`} />}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default HeroSlide;
