import HeroSlide from "../../component/hero-slide/HeroSlide";
import { Link } from "react-router-dom";
import { ButtonTheme, Button } from "../../component/button/Button";
import { TCategoryItem } from "../../api/types";
import MovieList from "component/movie-list/MovieList";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import MovieListContainer from "component/movie-list/MovieListContainer";

const categoryPage: Array<TCategoryItem> = [
    { title: "Popular Movies", category: "movie", listType: "popular" },
    { title: "Top Rated Movies", category: "movie", listType: "top_rated" },
    { title: "Popular TV", category: "tv", listType: "popular" },
    { title: "Top Rated TV", category: "tv", listType: "top_rated" },
];

const Home = () => {
    console.log("Home: ");
    //  const errorStatus = useSelector(selectMovieErrorStatus);
    // const isLoading = useSelector(selectMovieIsLoading);

    return (
        <>
            <HeroSlide />
            <div>
                <div className="container">
                    {categoryPage.map((item, idx) => {
                        const { category, listType, title } = item;
                        //const link = "catalog/" + category + "/" + listType;
                        return (
                            <div key={title + idx} className="section mb-3">
                                <MovieListContainer category={category} listType={listType} title={item.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
