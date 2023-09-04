import { FC, useEffect, useState } from "react";

import "./MovieCard.scss";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "../button/Button";

import { TCategoryType, TMovieItem } from "../../api/types";
import apiConfig from "../../api/apiConfig";
import { IMG } from "./IMG";

type MovieCardProps = {
    movieItem: TMovieItem;
    category: TCategoryType | undefined;
};

const MovieCard: FC<MovieCardProps> = ({ movieItem, category }) => {
    const link = "/" + category + "/" + movieItem.id;

    const bg = apiConfig.w185Image(movieItem.poster_path || movieItem.backdrop_path);

    return (
        <div className="movie-card">
            <Link to={link} className="movie-poster">
                <IMG path={movieItem.poster_path || movieItem.backdrop_path} size={"w185"} />
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
    );
};

export default MovieCard;
