import { RouteObject, RouteProps } from "react-router-dom";
import Home from "pages/Home/Home";
import Catalog from "pages/Catalog/Catalog";
import Detail from "pages/detail/Detail";

export enum AppRoutes {
    HOME = "home",
    LISTTYPE = "listType",
    SEARCH = "search",
    DETAIL = "detail",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LISTTYPE]: "catalog/:category/:listType",
    [AppRoutes.SEARCH]: "/:category/search/:keyword",
    [AppRoutes.DETAIL]: "/:category/:id",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home />,
    },
    [AppRoutes.LISTTYPE]: {
        path: RoutePath.listType,
        element: <Catalog />,
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <Catalog />,
    },
    [AppRoutes.DETAIL]: {
        path: RoutePath.detail,
        element: <Detail />,
    },
};

/* export const routerConfig: RouteObject[]=[

] */
