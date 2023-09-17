import { Skeleton } from "component/Skeleton/Skeleton";
import Button from "component/Button/Button";
import { CSSProperties, FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cls from "./IMG.module.scss";
import classNames from "classnames";

type IMGProps = {
    path: string | null;
    size?: "w500" | "w185";
    notSkeleton?: boolean;
    link?: string;
    list?: boolean;
    onlyImg?: boolean;
    borderRadius?: string;
};

export const IMG: FC<IMGProps> = ({ size: sizeProp, path, notSkeleton, link, list, onlyImg, borderRadius }) => {
    const [url, setUrl] = useState("");

    const styles: CSSProperties = {
        borderRadius,
    };

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
        return <img src={url} className={cls.card__img} alt="picture" />;
    }

    if (!list && !url && !notSkeleton) {
        return <Skeleton borderRadius={borderRadius || ""} paddingTop="150.5%" />;
    }

    if (list && !url && !notSkeleton) {
        return <Skeleton borderRadius={borderRadius || "10px"} width={220} height={330} minWidth={220} paddingTop="0" />;
    }

    const mods = {
        [cls.card__img]: !list,
        [cls["card__img-list"]]: list,
    };

    return onlyImg ? (
        <img src={url} className={cls.card__img} style={styles} alt="picture" />
    ) : (
        <Link to={link || "/"} className={classNames(cls.card__poster, { [cls["card__poster-list"]]: list })}>
            <img src={url} className={classNames([mods])} alt="picture" style={styles} />
            <Button className={cls.btn}>
                <i className="bx bx-play"></i>
            </Button>
        </Link>
    );
};
