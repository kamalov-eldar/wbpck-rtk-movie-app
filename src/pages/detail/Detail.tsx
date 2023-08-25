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

const Detail = () => {
    const { category, id } = useParams<{ category?: TCategoryType; id?: string }>();

    useEffect(() => {
        if (category && id) {
            // getMovieDetails(category, Number(id), { params: {} });
        }
        return () => {
            // resetMovieDetails();
        };
    }, [category, id]);

    if ("dataMovieDetail") {
        return <div className="loader">No Data Detail</div>;
    }

    return (
        <>
            <>
                <div className="banner" style={{ backgroundImage: `url()` }}></div>
                <div className="mb-3 movie-content container">
                    <div className="movie-content__poster">
                        <div
                            className="movie-content__poster__img"
                            style={{
                                backgroundImage: `url()`,
                            }}></div>
                    </div>
                    <div className="movie-content__info">
                        <h1 className="title">{"title"}</h1>
                        <div className="genres">
                            {"movieDetail.genres" &&
                                /*  movieDetail.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i} className="genres__item">
                                                        {'genre.name'}
                                                </span>
                                            )) */ "genre.name"}
                        </div>
                        <p className="overview">{"movieDetail.overview"}</p>
                        <div className="cast">
                            <div className="section__header">
                                <h2>Casts</h2>
                            </div>
                            <CastList id={0} category={category!} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section mb-3">
                        <VideoList id={0} category={category!} />
                    </div>
                    <div className="section mb-3">
                        <div className="section__header mb-2">
                            <h2>Similar</h2>
                        </div>
                        <MovieList category={category!} listType="similar" id={0} />
                    </div>
                </div>
            </>
            <StatusUpload text={"Rejected upload - Enable vpn in browser "} />
        </>
    );
};

export default Detail;
