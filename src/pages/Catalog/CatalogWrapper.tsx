import { Suspense } from "react";
import { Loader } from "component/Loader/Loader";
import { CatalogPageAsync } from "./Catalog.async";
import cls from "./Catalog.module.scss";
import classNames from "classnames";

export const CatalogWrapper = ({}) => {
    return (
        <Suspense
            fallback={
                <div className={classNames(cls.catalogLoader)}>
                    <Loader />
                </div>
            }>
            <CatalogPageAsync />
        </Suspense>
    );
};
