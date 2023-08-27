import { useNavigate } from "react-router-dom";
import apiConfig from "../../../api/apiConfig";
import tmdbApi from "../../../api/tmdbApi";
import { FC, useCallback, useEffect, useState } from "react";
import { ButtonTheme, Button } from "../../button/Button";
import "../Hero-Slide.scss";
import { IMG } from "../../movie-card/IMG";
import { TMovieItem, TResponseVideosList } from "api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchVideosList } from "store/videos/fetchVideosList/fetchVideosList";
import { useSelector } from "react-redux";
import { selectVideosList, selectVideosListError, selectVideosListIsLoading } from "store/videos/selectors/selectVideosList";

type HeroSlideItemProps = {
    item: TMovieItem;
    className: string;
};

const HeroSlideItem: FC<HeroSlideItemProps> = ({ item, className }) => {
    console.log("HeroSlideItem: ");
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
    const poster = apiConfig.originalImage(item.poster_path);
    // 	https://image.tmdb.org/t/p/original/upXYRYVA4Jij3whT5ilP4fTuVw0.jpg

    const videosListData = useSelector(selectVideosList);
    const isLoading = useSelector(selectVideosListIsLoading);
    const error = useSelector(selectVideosListError);

    const modal = document.querySelector(`#modal_${item.id}`);
    const modalContent = modal?.querySelector(".modal__content");

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        console.log("modal: ", modal);
        const modalContent = modal?.querySelector(".modal__content");

        const res = await dispatch(fetchVideosList(item.id));
        const { results } = res.payload as TResponseVideosList;
        if (res.meta.requestStatus === "fulfilled") {
            //onSuccess();
        }

        if (results.length > 0) {
            const videSrc = "https://www.youtube.com/embed/" + results[0].key;

            modal?.querySelector(".modal__content > iframe")?.setAttribute("src", videSrc);
        } else {
            if (modalContent) {
                modalContent.innerHTML = "No trailer";
            }
        }
        modal?.classList.toggle("active");
    };

    return (
        <div className={`hero-slide__item ${className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="overview">{"Release Dates: " + item.release_date}</div>
                    <div className="btns">
                        <Button theme={ButtonTheme.PRIMARY} onClick={() => navigate("/movie/" + item.id)}>
                            Watch now
                        </Button>
                        <Button theme={ButtonTheme.OUTLINE} onClick={setModalActive}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <IMG path={item.poster_path || item.backdrop_path} size={"w500"} />
                </div>
            </div>
        </div>
    );
};

export default HeroSlideItem;
