import StatusUpload from "component/status-upload/StatusUpload";
import { routeConfig } from "../../../config/routeConfig/routeConfig";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
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

export default AppRouter;
