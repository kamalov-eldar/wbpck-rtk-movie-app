import { FC, useEffect, useState } from "react";

import "./MovieCard.scss";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "../button/Button";

import { TCategoryType } from "../../api/types";
import { TMovieItem } from "../../api/types";
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
        <Link to={link} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className="movie-card">
                <IMG path={movieItem.poster_path || movieItem.backdrop_path} size={"w185"} />
                <Button className="btn play">
                    {/*  <i className="bx bx-play"></i> */}
                    {/* <div className="play"></div> */}
                </Button>
                {/*  <div>
                    <YuotubeIcon className="btn" />
                </div> */}
            </div>
            <h3 className="movie-title">{movieItem.title}</h3>
        </Link>
    );
};

export default MovieCard;
