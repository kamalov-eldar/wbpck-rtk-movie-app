import StatusUpload from "component/status-upload/StatusUpload";
import { routeConfig } from "../../../config/routeConfig/routeConfig";
import React, { Suspense, memo, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "store/user/selector/selectUserAuthData";

const AppRouter = () => {
    const isAuth = useSelector(selectUserAuthData);

    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }

                return true;
            }),
        [isAuth],
    );
    return (
        <Routes>
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<StatusUpload text={""} />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);
