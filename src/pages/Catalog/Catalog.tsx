import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { TCategoryType, TListType } from "../../api/types";
import PageHeader from "component/page-header/PageHeader";
import MovieGrid from "component/movie-grid/MovieGrid";

const arrNav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "Upcoming Movies",
        path: "/catalog/movie/upcoming",
    },
    {
        display: "Top Rated Movies",
        path: "/catalog/movie/top_rated",
    },
    {
        display: "Popular Movies",
        path: "/catalog/movie/popular",
    },
    {
        display: "TV Series Popular",
        path: "/catalog/tv/popular",
    },
    {
        display: "Top Rated TV Series",
        path: "/catalog/tv/top_rated",
    },
];

const Catalog = () => {
    const { category: categoryUrl, listType } = useParams<{ category: TCategoryType; listType: TListType }>();
    const { pathname } = useLocation();

    const headerTitle = arrNav.find((item) => {
        return item.path === pathname;
    });

    return (
        <div className="catalog">
            <PageHeader title={headerTitle?.display} />
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={categoryUrl} listType={listType} />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
