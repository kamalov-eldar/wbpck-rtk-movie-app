import { Skeleton } from "component/Skeleton/Skeleton";
import Button from "component/button/Button";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cls from "./IMG.module.scss";
import classNames from "classnames";

type IMGProps = {
    path: string | null;
    size?: string;
    notSkeleton?: boolean;
    link?: string;
    flex?: boolean;
};

export const IMG: FC<IMGProps> = ({ size: sizeProp, path, notSkeleton, link, flex }) => {
    const [url, setUrl] = useState("");

    const size = sizeProp ? sizeProp : "w220_and_h330_face";

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/${size}/${path}`)
            .then((response) => {
                return response.blob();
            })
            .then((image) => {
                if (!path) {
                    setUrl("");
                } else {
                    setUrl(URL.createObjectURL(image));
                }
            })
            .catch((err) => console.log(err));
    }, []);

    if (notSkeleton && !url) {
        return <></>;
    }

    if (notSkeleton && url) {
        return <img src={url} className={cls.card__img} />;
    }

    if (!url && !notSkeleton) {
        return <Skeleton border="10px" borderBottomRightRadius={"0"} borderBottomLeftRadius={"0"} paddingTop="150.5%" />;
    }

    const mods = {
        [cls.card__img]: !flex,
        [cls["card__img-flex"]]: flex,
    };

    return (
        <Link to={link || "/"} className={classNames(cls.card__poster, { [cls["card__poster-flex"]]: flex })}>
            <img src={url} className={classNames([mods])} />
            <Button className={cls.btn}>
                <i className="bx bx-play"></i>
            </Button>
        </Link>
    );
};
