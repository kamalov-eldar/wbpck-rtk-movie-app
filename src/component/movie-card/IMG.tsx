import { Skeleton } from "component/Skeleton/Skeleton";
import { FC, useEffect, useState } from "react";

type IMGProps = {
    path: string | null;
    size: string;
    mods?: string;
};

export const IMG: FC<IMGProps> = ({ size, path, mods }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/w220_and_h330_face/${path}`)
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

    if (url && !mods) {
        return <Skeleton border="10px" borderBottomRightRadius={"0"} borderBottomLeftRadius={"0"} paddingTop="153%" />;
    }

    if (!url && mods) {
        return <img src={url} className="img-card" />;
    }

    return <img src={url} className="img-card" />;
};
