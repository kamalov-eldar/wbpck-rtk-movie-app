import { FC, lazy } from "react";

export const TrailerModalAsync = lazy(
    () => import("./TrailerModalContent"),
    /* () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import("./TrailerModalContent")), 1000);
        }), */
);
