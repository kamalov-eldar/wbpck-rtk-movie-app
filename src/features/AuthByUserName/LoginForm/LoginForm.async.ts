import { FC, lazy } from "react";
import { LoginModalContentProps } from "./LoginModalContent";

export const LoginFormAsync = lazy<FC<LoginModalContentProps>>(
    // () => import("./LoginModalContent"),
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import("./LoginModalContent")), 1000);
        }),
);

// export const CatalogPageAsync = lazy(() => import("./Catalog"));
