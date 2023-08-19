import { FC } from "react";
import cls from "./NotFoundPage.module.scss";
import classNames from "classnames";

const NotFoundPage: FC = () => {
    return (
        <div className={cls.NotFoundPage}>
            <p>{"Страница не найдена"}</p>
        </div>
    );
};

export default NotFoundPage;
