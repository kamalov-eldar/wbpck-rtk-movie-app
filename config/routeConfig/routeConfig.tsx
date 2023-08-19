import { RouteObject, RouteProps } from "react-router-dom";
import Catalog from "../../src/pages/Catalog/Catalog";
import Detail from "../../src/pages/Detail/Detail";
import Home from "../../src/pages/Home/Home";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import { ProfilePageAsync } from "pages/ProfilePage/ProfilePage.async";
import { CatalogPageAsync } from "pages/Catalog/Catalog.async";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

export enum AppRoutes {
    HOME = "home",
    LISTTYPE = "listType",
    SEARCH = "search",
    DETAIL = "detail",
    PROFILE = "profile",
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LISTTYPE]: "catalog/:category/:listType",
    [AppRoutes.SEARCH]: "/:category/search/:keyword",
    [AppRoutes.DETAIL]: "/:category/:id",
    [AppRoutes.PROFILE]: "/profile",
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
        element: <CatalogPageAsync />,
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <CatalogPageAsync />,
    },
    [AppRoutes.DETAIL]: {
        path: RoutePath.detail,
        element: <Detail />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePageAsync />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

/* export const routerConfig: RouteObject[]=[

] */
