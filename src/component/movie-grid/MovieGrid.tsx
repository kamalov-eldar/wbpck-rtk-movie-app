import { FC, memo, useCallback, useEffect } from "react";
import cls from "./MovieGrid.module.scss";
import MovieCard from "../movie-card/MovieCard";

import { ButtonTheme, Button } from "../Button/Button";
import MovieSearch from "../movie-search/MovieSearch";
import { TCategoryType, TListType, TMovieItem } from "../../api/types";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { paginationActions } from "store/pagination/slice/paginationSlice";
import { SvgSpinners } from "assets/svg/SvgSpinners";
import { IError } from "store/movie/types/movie";
import { useSelector } from "react-redux";
import { getViewCards } from "store/viewCards/selectors/viewCardsSelectors";
import { ViewCardsType } from "component/SwitchingTypeCards/SwitchingTypeCards";
import classNames from "classnames";
import MovieCardList from "./MovieCardList/MovieCardList";

type MovieGridProps = {
    category: TCategoryType | undefined;
    listType: TListType | undefined;
    dataMovieList: TMovieItem[] | undefined;
    isLoading: boolean;
    error: IError | undefined;
};

const MovieGrid: FC<MovieGridProps> = ({ category, listType, dataMovieList, isLoading, error }) => {
    const { keyword: keywordUrl } = useParams<{ keyword: string }>();
    const navigate = useNavigate();
    const view = useSelector(getViewCards);

    useEffect(() => {
        if (keywordUrl) {
            navigate(`/`);
        }
    }, []);

    useEffect(() => {
        // setKeyword("");
    }, [category]);

    const dispatch = useAppDispatch();

    const loadMore = useCallback(() => {
        dispatch(paginationActions.nextPage());
    }, []);

    const viewType = {
        [cls["movie-grid"]]: view === ViewCardsType.GRID,
        [cls["movie-list"]]: view === ViewCardsType.LIST,
    };

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={category} />
            </div>
            <div className={classNames([viewType])}>
                {category === "movie" && (
                    <>
                        {dataMovieList?.map((item, i) => {
                            return view === ViewCardsType.GRID ? (
                                <MovieCard category={category} movieItem={item} key={item.id} />
                            ) : (
                                <MovieCardList category={category} movieItem={item} key={item.id} />
                            );
                        })}
                    </>
                )}
            </div>
            {error && (
                <div className="errorBlock">
                    <span className="errorText">{error.messageError}</span>
                </div>
            )}
            {!error?.statusError && dataMovieList && dataMovieList.length > 0 && (
                <div className="movie-grid__loadmore">
                    <Button disabled={isLoading} theme={ButtonTheme.LOAD} className="small" onClick={loadMore}>
                        {isLoading ? <SvgSpinners /> : "Load more"}
                    </Button>
                </div>
            )}
        </>
    );
};

export default memo(MovieGrid);
