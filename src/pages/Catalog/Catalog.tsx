import { useLocation, useParams } from "react-router-dom";

import { TCategoryType, TListType } from "../../api/types";
import PageHeader from "component/page-header/PageHeader";
import MovieGridContainer from "component/movie-grid/MovieGridContainer";
import cls from "./Catalog.module.scss";
import { SwitchingTypeCards, ViewCardsType } from "component/SwitchingTypeCards/SwitchingTypeCards";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { viewCardsActions } from "store/viewCards/slice/viewCardsSlice";
import { useSelector } from "react-redux";
import { getViewCards } from "store/viewCards/selectors/viewCardsSelectors";

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
    const dispatch = useAppDispatch();

    const view = useSelector(getViewCards);

    const headerTitle = arrNav.find((item) => {
        return item.path === pathname;
    });

    const onChangeView = useCallback(
        (view: ViewCardsType) => {
            console.log("onChangeView: ");
            dispatch(viewCardsActions.setView(view));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(viewCardsActions.initState());
    }, []);

    return (
        <div className="catalog" style={{ flex: "1 0 auto" }}>
            <PageHeader />
            <div className={cls.catalog__header}>
                <h2 className={cls.title}>{headerTitle?.display}</h2>
                <SwitchingTypeCards view={view} onViewClick={onChangeView} />
            </div>
            <div className="container">
                <div className="section mb-3">
                    <MovieGridContainer category={categoryUrl} listType={listType} />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
