import { RouteObject, RouteProps } from "react-router-dom";
import Home from "../../src/pages/Home/Home";
import { ProfilePageAsync } from "pages/ProfilePage/ProfilePage.async";
import { CatalogPageAsync } from "pages/Catalog/Catalog.async";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { MovieDetailsPageAsync } from "pages/MovieDetails/MovieDetails.async";
import { CatalogWrapper } from "pages/Catalog/CatalogWrapper";

export enum AppRoutes {
    HOME = "home",
    LISTTYPE = "listType",
    SEARCH = "search",
    MOVIE_DETAIL = "movie_detail",
    PROFILE = "profile",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LISTTYPE]: "/catalog/:category/:listType",
    [AppRoutes.SEARCH]: "/:category/search/:keyword",
    [AppRoutes.MOVIE_DETAIL]: "/:category/", // "/:category/:id"
    [AppRoutes.PROFILE]: "/profile/",
    [AppRoutes.NOT_FOUND]: "*",
};

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home />,
    },
    [AppRoutes.LISTTYPE]: {
        path: RoutePath.listType,
        element: <CatalogWrapper />,
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <CatalogWrapper />,
    },
    [AppRoutes.MOVIE_DETAIL]: {
        path: `${RoutePath.movie_detail}:id`,
        element: <MovieDetailsPageAsync />,
    },

    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePageAsync />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
