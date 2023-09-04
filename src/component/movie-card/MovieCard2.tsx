import { FC, useEffect, useState } from "react";

import "./MovieCard2.scss";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "../button/Button";

import { TCategoryType, TMovieItem } from "../../api/types";
import apiConfig from "../../api/apiConfig";
//import { IMG } from "./IMG";
import { Skeleton } from "component/Skeleton/Skeleton";

type MovieCardProps = {
    movieItem: TMovieItem;
    category: TCategoryType | undefined;
};

type IMGProps = {
    path: string | null;
    size: string;
    mods?: string;
};

const MovieCard2: FC<MovieCardProps> = ({ movieItem, category }) => {
    const link = "/" + category + "/" + movieItem.id;

    const bg = apiConfig.w185Image(movieItem.poster_path || movieItem.backdrop_path);

    const path = movieItem.poster_path || movieItem.backdrop_path;

    const [url, setUrl] = useState("");

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/w220_and_h330_face/${path}`) // https://image.tmdb.org/t/p/${size}/${path}
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
        <div className="card">
            {url ? (
                <div>
                    <Link to={link} style={{ width: "100%" }}>
                        <div className="image__wrapper">
                            <img className="image" src={url} />
                            <div className="middle">
                                <Button className="btn">
                                    <i className="bx bx-play"></i>
                                </Button>
                            </div>
                        </div>
                    </Link>
                    <div className="card__content">
                        <h3 className="movie-title">{movieItem.title}</h3>
                    </div>
                </div>
            ) : (
                <Skeleton border="30px"  paddingTop="188.5%" />
            )}
        </div>
    );
};

export default MovieCard2;
