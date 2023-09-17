import { useNavigate } from "react-router-dom";
import apiConfig from "../../../api/apiConfig";
import { FC, useCallback, useEffect, useState } from "react";
import { ButtonTheme, Button } from "../../Button/Button";
import "../Hero-Slide.scss";
import { IMG } from "../../IMG/IMG";
import { TMovieItem, TResponseVideosList } from "api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchVideosList } from "store/videos/fetchVideosList/fetchVideosList";
import { TrailerModal } from "./TrailerModal";

type HeroSlideItemProps = {
    item: TMovieItem;
    className: string;
};

const HeroSlideItem: FC<HeroSlideItemProps> = ({ item, className }) => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const [isOpenTrailerModal, setOpenTrailerModal] = useState(false);

    const onCloseTrailerModal = useCallback(() => {
        setOpenTrailerModal(false);
    }, []);

    const setModalActive = useCallback(() => {
        setOpenTrailerModal(true);
    }, []);

    const [url, setUrl] = useState("");
    const path = item.backdrop_path || item.poster_path;

    setTimeout(() => {
        // console.log("setTimeout");
    }, 1);

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/original${path}`)
            .then((response) => {
                return response.blob();
            })
            .then((image) => {
                if (!path) {
                    setUrl("");
                } else {
                    setUrl(URL.createObjectURL(image));
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {isOpenTrailerModal && <TrailerModal id={item.id} onClose={onCloseTrailerModal} isOpen={isOpenTrailerModal} />}

            <div className={`hero-slide__item ${className}`} style={{ backgroundImage: `url(${url})` }}>
                <div className="hero-slide__item__content">
                    <div className="hero-slide__item__content__info">
                        <h2 className="title">{item.title}</h2>
                        <div className="overview">{item.overview}</div>
                        <div className="overview">{"Release Date: " + item.release_date}</div>
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
                        <IMG notSkeleton path={item.poster_path || item.backdrop_path} size={"w500"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSlideItem;
