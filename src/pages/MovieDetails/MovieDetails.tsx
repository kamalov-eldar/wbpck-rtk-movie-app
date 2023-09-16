import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TCategoryType } from "../../api/types";

import "./MovieDetails.scss";
import apiConfig from "../../api/apiConfig";
import CastList from "../../component/cast-list/CastList";
import VideoList from "component/video-list/VideoList";
import { fetchMovieDetails } from "store/movieDetails/services/fetchMovieDetails/fetchMovieDetails";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    selectMovieDetailGenres,
    selectMovieDetailTitle,
    selectMovieDetailOverview,
    selectMovieDetailBackdropPath,
    selectMovieDetailPosterPath,
} from "store/movieDetails/selectors/selectMovieDetails";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { movieDetailsReducer } from "store/movieDetails/slice/movieDetailsSlice";
import MovieListContainer from "component/movie-list/MovieListContainer";
import AddCommentForm from "component/AddCommentForm/AddCommentForm";
import { addComment } from "store/addCommentForm/services/addComment";
import { CommentList } from "component/CommentList/CommentList";
import { fetchCommentsByMovieId } from "store/comments/services/fetchCommentsByMovieId/fetchCommentsByMovieId";
import { getMovieComments, movieDetailsCommentsReducer } from "store/comments/slice/movieDetailsCommentsSlice";
import { selectCommentsIsLoading } from "store/comments/selectors/selectComments";

const redusers: ReducersList = {
    movieDetails: movieDetailsReducer,
    movieDetailsComments: movieDetailsCommentsReducer,
};

const MovieDetail = () => {
    // console.log("Detail: ");
    const { category, id } = useParams<{ category?: TCategoryType; id?: string }>();
    const movieId = Number(id);
    const dispatch = useAppDispatch();

    const genres = useSelector(selectMovieDetailGenres);
    const title = useSelector(selectMovieDetailTitle);
    const overview = useSelector(selectMovieDetailOverview);
    const backdropPath = useSelector(selectMovieDetailBackdropPath);
    const posterPath = useSelector(selectMovieDetailPosterPath);
    const comments = useSelector(getMovieComments.selectAll);
    const commentsIsLoading = useSelector(selectCommentsIsLoading);

    useEffect(() => {
        if (category && movieId) {
            const params = {
                id: movieId,
                category,
            };
            dispatch(fetchMovieDetails(params));
        }
    }, [category, movieId, dispatch]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addComment({ text, movieId }));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(fetchCommentsByMovieId(movieId));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className="MovieDetail">
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${apiConfig.originalImage(backdropPath || posterPath)})` }}></div>
                <div className="mb-3 movie-content container">
                    <div className="movie-content__poster">
                        <div
                            className="movie-content__poster__img"
                            style={{
                                backgroundImage: `url(${apiConfig.originalImage(posterPath || backdropPath)})`,
                            }}></div>
                    </div>
                    <div className="movie-content__info">
                        <h1 className="title">{title}</h1>
                        <div className="genres">
                            {genres &&
                                genres.slice(0, 5).map((genre, i) => (
                                    <span key={i} className="genres__item">
                                        {genre.name}
                                    </span>
                                ))}
                        </div>
                        <p className="overview">{overview}</p>
                        <div className="cast">
                            <div className="section__header">
                                <h2>Casts</h2>
                            </div>
                            <CastList id={movieId} category={category!} />
                        </div>
                    </div>
                </div>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={true /* commentsIsLoading */} comments={comments} />

                <div className="container">
                    <div className="section mb-3">
                        <VideoList id={movieId} category={category} />
                    </div>
                    <div className="section mb-3">
                        <MovieListContainer title={"Similar"} category={category} listType="similar" id={movieId} />
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default MovieDetail;
/* {
            movieId: 385687,
            user: {
                id: "1",
                username: "admin",
                avatar: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            },
            text: "привет",
            id: "xqgjowl",
        },
        {
            movieId: 385687,
            user: {
                id: "1",
                username: "admin",
                avatar: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            },
            text: "comments 1111",
            id: "IB0CBU8",
        }, */