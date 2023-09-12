import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TCategoryType } from "../../api/types";

import "./Detail.scss";
import apiConfig from "../../api/apiConfig";
import { TMovieDetail } from "../../api/types";
import CastList from "../../component/cast-list/CastList";
import VideoList from "component/video-list/VideoList";
import MovieList from "component/movie-list/MovieList";
import StatusUpload from "component/status-upload/StatusUpload";
import { fetchDetail } from "store/detail/fetchDetail/fetchDetail";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    selectDetailIsLoading,
    selectDetailError,
    selectDetailGenres,
    selectDetailTitle,
    selectDetailOverview,
    selectDetailBackdropPath,
    selectDetailPosterPath,
    selectDetailMovieID,
} from "store/detail/selectors/selectDetail";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { detailReducer } from "store/detail/slice/detailSlice";
import MovieListContainer from "component/movie-list/MovieListContainer";

const redusers: ReducersList = {
    detail: detailReducer,
};

const Detail = () => {
    console.log("Detail: ");
    const { category, id } = useParams<{ category?: TCategoryType; id?: string }>();
    const movieID = Number(id);
    const dispatch = useAppDispatch();

    //const movieID = useSelector(selectDetailMovieID);
    const genres = useSelector(selectDetailGenres);
    const title = useSelector(selectDetailTitle);
    const overview = useSelector(selectDetailOverview);
    const backdropPath = useSelector(selectDetailBackdropPath);
    const posterPath = useSelector(selectDetailPosterPath);

    //const isLoading = useSelector(selectDetailIsLoading);
    //const error = useSelector(selectDetailError);

    useEffect(() => {
        if (category && movieID) {
            const params = {
                id: movieID,
                category,
            };
            dispatch(fetchDetail(params));
        }
    }, [category, movieID, dispatch]);

    /* if (isLoading) {
        return <div className="loader">No Data Detail</div>;
    } */
    /*  <StatusUpload text={"Rejected upload - Enable vpn in browser "} /> */

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className="Detail">
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
                            <CastList id={movieID} category={category!} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section mb-3">
                        <VideoList id={movieID} category={category} />
                    </div>
                    <div className="section mb-3">
                        <MovieListContainer title={"Similar"} category={category} listType="similar" id={movieID} />
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default Detail;
