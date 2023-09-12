import { FC } from "react";
import { Link } from "react-router-dom";
import { TCategoryType, TMovieItem } from "../../api/types";
import { IMG } from "./IMG/IMG";

import "./MovieCard.scss";

type MovieCardProps = {
    movieItem: TMovieItem;
    category: TCategoryType | undefined;
    size?: string;
};

const MovieCard: FC<MovieCardProps> = ({ movieItem, category, size }) => {
    const link = "/" + category + "/" + movieItem.id;

    // const bg = apiConfig.w185Image(movieItem.poster_path || movieItem.backdrop_path);

    return (
        <div className="card">
            <IMG link={link} path={movieItem.poster_path || movieItem.backdrop_path} size={size} />
            <div className="card__desc">
                <Link to={link}>
                    <h3 className="card__title">{movieItem.title}</h3>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
