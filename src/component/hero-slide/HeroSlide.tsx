import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlideItem from "./Hero-slide-Item/HeroSlideItem";
import TrailerModalContent from "./Hero-slide-Item/TrailerModalContent";
import { useSelector } from "react-redux";
import { selectMovieError, selectMovieIsLoading, selectNowPlayingMovieList } from "store/movie/selectors/selectMovie";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchMovieList } from "store/movie/services/fetchMovieList/fetchMovieList";

const HeroSlide: FC = () => {
    SwiperCore.use([Autoplay]);
    const dispatch = useAppDispatch();

    const [isOpenTrailerModal, setOpenTrailerModal] = useState(false);
    const [idTrailer, setIdTrailer] = useState(0);

    useEffect(() => {
        dispatch(fetchMovieList({ listType: "now_playing", page: 1 }));
    }, []);

    const nowPlayingMovieList = useSelector(selectNowPlayingMovieList);
    const isLoading = useSelector(selectMovieIsLoading);
    const error = useSelector(selectMovieError);

    /*   const handleOpenTrailerModal = useCallback((isOpen: boolean, id?: number) => {
        setOpenTrailerModal(isOpen);
        if (id) setIdTrailer(id);
    }, []); */

    const filterArr = useMemo(
        () => (nowPlayingMovieList ? nowPlayingMovieList.filter((item, i) => item.id === idTrailer) : []),
        [nowPlayingMovieList, idTrailer],
    );
    //console.log("filterArr: ", filterArr);

    if (isLoading) {
        return (
            <div className="loader">
                <h2 className="loader__text">Loading...</h2>
            </div>
        );
    }

    if (error) {
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
                            {({ isActive }) => (
                                <HeroSlideItem
                                    // handleOpenTrailerModal={handleOpenTrailerModal}
                                    item={item}
                                    className={`${isActive ? "active" : ""}`}
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/*   {isOpenTrailerModal && filterArr.map((item, i) => (
                    <TrailerModalHOC
                        key={i}
                        //item={item}
                        onClose={setOpenTrailerModal}
                        isOpen={isOpenTrailerModal}
                    />
                ))} */}
            </>
        </div>
    );
};

export default HeroSlide;
