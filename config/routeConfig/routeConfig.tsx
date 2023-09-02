import { RouteObject, RouteProps } from "react-router-dom";
import Home from "../../src/pages/Home/Home";
import { ProfilePageAsync } from "pages/ProfilePage/ProfilePage.async";
import { CatalogPageAsync } from "pages/Catalog/Catalog.async";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { DetailPageAsync } from "pages/Detail/Detail.async";
import { CatalogWrapper } from "pages/Catalog/CatalogWrapper";

export enum AppRoutes {
    HOME = "home",
    LISTTYPE = "listType",
    SEARCH = "search",
    DETAIL = "detail",
    //  DETAIL_ID = "detail_ID",
    PROFILE = "profile",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LISTTYPE]: "/catalog/:category/:listType",
    [AppRoutes.SEARCH]: "/:category/search/:keyword",
    [AppRoutes.DETAIL]: "/detail/", // "/:category/:id"
    // [AppRoutes.DETAIL_ID]: "/detail/",
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
    [AppRoutes.DETAIL]: {
        path: `${RoutePath.detail}:id`,
        element: <DetailPageAsync />,
    },
    /*  [AppRoutes.DETAIL_ID]: {
        path: `${RoutePath.detail_ID}:id`,
        element: <Detail />,
    }, */
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

/* export const routerConfig: RouteObject[]=[

] */
