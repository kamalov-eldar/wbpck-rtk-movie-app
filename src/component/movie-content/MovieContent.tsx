import { FC, memo, useCallback, useEffect } from "react";
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
import cls from "./MovieContent.module.scss";
import { ScrollWrapper } from "component/ScrollWrapper/ScrollWrapper";
import { selectPage } from "store/pagination/selectors/selectPage/selectPage";

type MovieContentProps = {
    category: TCategoryType | undefined;
    dataMovieList: TMovieItem[] | undefined;
    isLoading: boolean;
    error: IError | undefined;
    onLoadNextPart: () => void;
};

const MovieContent: FC<MovieContentProps> = ({ category, dataMovieList, isLoading, error, onLoadNextPart }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const view = useSelector(getViewCards);

    const loadMore = useCallback(() => {
        dispatch(paginationActions.nextPage());
    }, [dispatch]);

    const viewType = {
        [cls["movie-grid"]]: view === ViewCardsType.GRID,
        [cls["movie-list"]]: view === ViewCardsType.LIST,
    };

    return (
        <div className={cls.movie__content}>
            <MovieSearch category={category} />
            <ScrollWrapper onScrollEnd={onLoadNextPart}>
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
            </ScrollWrapper>

            {error && (
                <div className="errorBlock">
                    <span className="errorText">{error.messageError}</span>
                </div>
            )}
            {!error?.statusError && dataMovieList && dataMovieList.length > 0 && (
                <div className={cls.content__button}>
                    <Button id="trigger" disabled={isLoading} theme={ButtonTheme.LOAD} className="small" onClick={loadMore}>
                        {isLoading ? <SvgSpinners width={"24px"} height={24} /> : "Load more"}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default memo(MovieContent);
