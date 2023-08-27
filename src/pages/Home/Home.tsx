import HeroSlide from "../../component/hero-slide/HeroSlide";
import { Link } from "react-router-dom";
import { ButtonTheme, Button } from "../../component/button/Button";
import { TCategoryItem } from "../../api/types";
import MovieList from "component/movie-list/MovieList";

const categoryPage: Array<TCategoryItem> = [
    { title: "Popular Movies", category: "movie", listType: "popular" },
    { title: "Top Rated Movies", category: "movie", listType: "top_rated" },
    { title: "Popular TV", category: "tv", listType: "popular" },
    { title: "Top Rated TV", category: "tv", listType: "top_rated" },
];

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                {categoryPage.map((item, idx) => {
                    const { category, listType, title } = item;
                    const link = "catalog/" + category + "/" + listType;

                    return (
                        <div key={title + idx} className="section mb-3">
                            <div className="section__header mb-2">
                                <h2>{title}</h2>
                                <Link to={link}>
                                    <Button theme={ButtonTheme.OUTLINE} className="small">
                                        View More
                                    </Button>
                                </Link>
                            </div>
                            <div style={{ minHeight: "24px" }}>
                                <MovieList category={category} listType={listType} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
