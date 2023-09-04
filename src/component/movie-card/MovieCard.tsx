import { FC, useEffect, useState } from "react";

import "./MovieCard.scss";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "../button/Button";

import { TCategoryType, TMovieItem } from "../../api/types";
import apiConfig from "../../api/apiConfig";
import { IMG } from "./IMG";
import { Skeleton } from "component/Skeleton/Skeleton";

type MovieCardProps = {
    movieItem: TMovieItem;
    category: TCategoryType | undefined;
};

const MovieCard: FC<MovieCardProps> = ({ movieItem, category }) => {
    const link = "/" + category + "/" + movieItem.id;

    const bg = apiConfig.w185Image(movieItem.poster_path || movieItem.backdrop_path);

    const [url, setUrl] = useState("");
    const path = movieItem.poster_path || movieItem.backdrop_path;

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/w220_and_h330_face/${path}`)
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

    return url ? (
        <div className="movie-card">
            <Link to={link} className="movie-poster">
                {/*   <IMG path={movieItem.poster_path || movieItem.backdrop_path} size={"w185"} /> */}
                <img src={url} className="img-card" />
                <Button className="btn">
                    <i className="bx bx-play"></i>
                </Button>
            </Link>
            <div className="card__content">
                <Link to={link}>
                    <h3 className="movie-title">{movieItem.title}</h3>
                </Link>
            </div>
        </div>
    ) : (
        <Skeleton border="10px" paddingTop="186.5%" />
    );
};

export default MovieCard;
