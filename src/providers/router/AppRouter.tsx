import { AppRoutesProps, routeConfig } from "../../../config/routeConfig/routeConfig";
import { FC, Suspense, lazy, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "component/Loader/Loader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<></>}>
                <div>{route.element}</div>
            </Suspense>
        );
        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
