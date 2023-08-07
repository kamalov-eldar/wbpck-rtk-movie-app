import React, { FC, useCallback, useEffect } from "react";
import "./MovieSearch.scss";

import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { TCategoryType } from "../../api/types";

type MovieSearchProps = {
    category: TCategoryType | undefined;
};

const MovieSearch: FC<MovieSearchProps> = ({ category }) => {
    const navigate = useNavigate();

    const goToSearch = useCallback(() => {
        /*  if (keyword.trim().length > 0) {
            navigate(`/${category}/search/${keyword}`);
            const params = {
                page: 1,
                query: keyword,
            };
            if (category) searchMovie(category, { params });
        } */
    }, [category, history]);

    return (
        <div className="movie-search">
            <input type="text" placeholder="Enter keyword" /* value={keyword} */ onChange={(evt) => console.log(evt)} />
            <Button className="small" onClick={goToSearch}>
                Search
            </Button>
        </div>
    );
};

export default MovieSearch;
