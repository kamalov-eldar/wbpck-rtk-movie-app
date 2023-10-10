import { useLocation, useParams } from "react-router-dom";
import { TCategoryType, TListType } from "../../api/types";
import MovieContainer from "component/movie-content/MovieContainer";
import { SwitchingTypeCards, ViewCardsType } from "component/SwitchingTypeCards/SwitchingTypeCards";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { viewCardsActions } from "store/viewCards/slice/viewCardsSlice";
import { useSelector } from "react-redux";
import { getViewCards } from "store/viewCards/selectors/viewCardsSelectors";
import cls from "./Catalog.module.scss";
import bg from "../../assets/footer-bg.jpg";

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
            dispatch(viewCardsActions.setView(view));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(viewCardsActions.initState());
    }, []);

    return (
        <div className={cls.catalog}>
            <div>
                <div className={cls.catalog__header} style={{ backgroundImage: `url(${bg})` }}></div>
                <div className={cls.catalog__title}>
                    <h2 className={cls.title}>{headerTitle?.display}</h2>

                    <SwitchingTypeCards view={view} onViewClick={onChangeView} />
                </div>
            </div>
            <MovieContainer category={categoryUrl} listType={listType} />
        </div>
    );
};

export default Catalog;
