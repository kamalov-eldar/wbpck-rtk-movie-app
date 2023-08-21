import { AppRoutesProps, routeConfig } from "../../../config/routeConfig/routeConfig";
import { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "component/Loader/Loader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<Loader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
