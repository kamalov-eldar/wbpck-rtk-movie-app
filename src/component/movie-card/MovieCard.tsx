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
    if (!(movieItem.poster_path || movieItem.backdrop_path)) {
        console.log(movieItem);
    }
    return (
        /*   <Link to={link} style={{ display: "flex", flexDirection: "column",
        justifyContent: "space-between" }}> */
        <div>
            <div className="movie-card">
                <IMG path={movieItem.poster_path || movieItem.backdrop_path} size={"w185"} />
                <Button className="btn">
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3 className="movie-title">{movieItem.title}</h3>
        </div>
        /*  </Link> */
    );
};

export default MovieCard;
