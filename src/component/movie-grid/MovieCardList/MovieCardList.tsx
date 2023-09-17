import React, { FC } from "react";
import { TCategoryType, TMovieItem } from "api/types";
import { IMG } from "component/movie-card/IMG/IMG";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import cls from "./MovieCardList.module.scss";

type MovieCardProps = {
    movieItem: TMovieItem;
    category: TCategoryType | undefined;
};

const MovieCardList: FC<MovieCardProps> = ({ movieItem, category }) => {
    const { overview, release_date, vote_average } = movieItem;

    const link = "/" + category + "/" + movieItem.id;

    // const bg = apiConfig.w185Image(movieItem.poster_path || movieItem.backdrop_path);

    return (
        <div className={cls.card__list}>
            <IMG list link={link} path={movieItem.poster_path || movieItem.backdrop_path} borderRadius={`10px`}/>
            <div className="card__desc">
                <Link to={link}>
                    <h2 className={cls.card__title}>{movieItem.title}</h2>
                </Link>
                <p className={cls.card__overview}>{overview}</p>
                <div className={cls.card__date}>
                    <p>Release date: </p>
                    <p>{release_date}</p>
                </div>
                <div className={cls.card__rating}>
                    <p>Rating: </p>
                    <Rating
                        name="half-rating-read"
                        value={Number(vote_average) * 0.5}
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                        max={5}
                        size="large"
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieCardList;
