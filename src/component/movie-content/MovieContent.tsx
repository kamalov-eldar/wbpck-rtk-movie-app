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

type MovieContentProps = {
    category: TCategoryType | undefined;
    listType: TListType | undefined;
    dataMovieList: TMovieItem[] | undefined;
    isLoading: boolean;
    error: IError | undefined;
};

const MovieContent: FC<MovieContentProps> = ({ category, listType, dataMovieList, isLoading, error }) => {
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

    const onLoadNextPart = useCallback(() => {
        console.log("onLoadNextPart");
    }, []);

    return (
        <ScrollWrapper onScrollEnd={onLoadNextPart}>
            <div className={cls.movie__content}>
                <div className={cls.container__content}>
                    <MovieSearch category={category} />
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
                </div>
                {error && (
                    <div className="errorBlock">
                        <span className="errorText">{error.messageError}</span>
                    </div>
                )}
                {!error?.statusError && dataMovieList && dataMovieList.length > 0 && (
                    <Button disabled={isLoading} theme={ButtonTheme.LOAD} className="small" onClick={loadMore}>
                        {isLoading ? <SvgSpinners /> : "Load more"}
                    </Button>
                )}
            </div>
        </ScrollWrapper>
    );
};

export default memo(MovieContent);
