import { Skeleton } from "component/Skeleton/Skeleton";
import Button from "component/button/Button";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type IMGProps = {
    path: string | null;
    size?: string;
    mods?: string;
    link?: string;
};

export const IMG: FC<IMGProps> = ({ size, path, mods, link }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/${size ? size : "w220_and_h330_face"}/${path}`)
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

    if (mods && !url) {
        return <></>;
    }

    if (mods && url) {
        return <img src={url} className="card__img" />;
    }

    if (!url && !mods) {
        return <Skeleton border="10px" borderBottomRightRadius={"0"} borderBottomLeftRadius={"0"} paddingTop="150.5%" />;
    }

    return (
        <Link to={link || "/"} className="card__poster">
            {/*  <div className="card__img-block"> */}
            <img src={url} className="card__img" />
            <Button className="btn">
                <i className="bx bx-play"></i>
            </Button>
            {/*  </div> */}
        </Link>
    );
};
