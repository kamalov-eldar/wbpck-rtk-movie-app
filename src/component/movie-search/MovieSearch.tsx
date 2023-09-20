import React, { FC, useCallback, useEffect } from "react";
import "./MovieSearch.scss";

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { TCategoryType } from "../../api/types";
import { Input } from "component/Input/Input";

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
            <Input
                field={"search"}
                type="text"
                placeholder="Enter keyword"
                /* value={keyword} */
                onChange={(evt) => console.log(evt)}>
                <Button className="small" onClick={goToSearch}>
                    Search
                </Button>
            </Input>
        </div>
    );
};

export default MovieSearch;
