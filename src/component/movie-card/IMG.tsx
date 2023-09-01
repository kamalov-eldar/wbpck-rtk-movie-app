import { Skeleton } from "component/Skeleton/Skeleton";
import { FC, useEffect, useState } from "react";

type IMGProps = {
    path: string;
    size: string;
    mods?: string;
};

export const IMG: FC<IMGProps> = ({ size, path, mods }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/${size}/${path}`)
            .then((response) => {
                return response.blob();
            })
            .then((image) => {
                setUrl(URL.createObjectURL(image));
            })
            .catch((err) => console.log(err));
    }, []);

    if (!url && !mods) {
        return (
            /*  <Skeleton variant="rectangular" sx={{ bgcolor: "grey.900", borderRadius: "30px", maxWidth: "100%" }}>
                <div style={{ paddingTop: "153%" }} />
                <Stack></Stack>
            </Skeleton> */
            /*  <Skeleton className={cls.skeleton} width="100%" height={200} /> */
            <Skeleton border="30px" />
        );
    }

    if (!url && mods) {
        return <img src={url} className="img-card" />;
    }

    return <img src={url} className="img-card" />;
};
