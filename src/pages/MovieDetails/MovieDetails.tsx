import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TCategoryType } from "../../api/types";

import "./MovieDetails.scss";
import apiConfig from "../../api/apiConfig";
import ActorsList from "../../component/actors-list/ActorsList";
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

const MovieDetails = () => {
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
                                <h2>Actors</h2>
                            </div>
                            <ActorsList id={movieId} category={category!} />
                        </div>
                    </div>
                </div>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />

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

export default MovieDetails;

