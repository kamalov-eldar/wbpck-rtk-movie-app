import React, { FC, useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroSlideItem from "./Hero-slide-Item/HeroSlideItem";

import TrailerModal from "./Hero-slide-Item/TrailerModal";
import StatusUpload from "component/status-upload/StatusUpload";
import { Loader } from "component/Loader/Loader";
import { useSelector } from "react-redux";
import {
    selectPopularMovieList,
    selectPopularMovieIsLoading,
    selectPopularMovieError,
} from "store/movie/selectors/selectPopularMovie";

const HeroSlide: FC = () => {
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        // dispatch(fetchMovieList({ listType, page: 1 }));
    }, []);
    const popularMovieList = useSelector(selectPopularMovieList);
    const isLoadingPopular = useSelector(selectPopularMovieIsLoading);
    const errorPopular = useSelector(selectPopularMovieError);

    if (isLoadingPopular) {
        return (
            <div className="loader">
                <h2 className="loader__text">Loading...</h2>
            </div>
        );
    }

    if (errorPopular) {
        return (
            <div className="loader">
                <h2 className="loader__text">Rejected upload - Enable vpn in browser &nbsp;</h2>
            </div>
        );
    }
    if (!popularMovieList) {
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
                    autoplay={{ delay: 6000 }}
                    >
                    {popularMovieList &&
                        popularMovieList.map((item, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => <HeroSlideItem item={item} className={`${isActive ? "active" : ""}`} />}
                            </SwiperSlide>
                        ))}
                </Swiper>
                {[].map((item, i) => (
                    <TrailerModal key={i} item={item} />
                ))}
            </>
        </div>
    );
};

export default HeroSlide;
