import React, { FC, useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroSlideItem from "./Hero-slide-Item/HeroSlideItem";

import TrailerModal from "./Hero-slide-Item/TrailerModal";
import StatusUpload from "component/status-upload/StatusUpload";
import { Loader } from "component/Loader/Loader";

const HeroSlide: FC = () => {
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        return () => {
            // clearMovieList();
        };
    }, []);

    {
        !"dataPopularMovieList" && (
            <div className="loader">
                <span className="loader__text"> No Data</span>
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
                    autoplay={{ delay: 6000 }}>
                    {[].map((item, i) => (
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
