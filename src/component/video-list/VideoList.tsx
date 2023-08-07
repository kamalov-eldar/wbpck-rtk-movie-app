import React, { FC, useEffect } from "react";
import Video from "./video/Video";
import "./VideoList.scss";
import { TCategoryType } from "../../api/types";

type VideoListProps = {
    id: number;
    category: TCategoryType;
};

const VideoList: FC<VideoListProps> = ({ category, id }) => {
    useEffect(() => {
        // getVideos(category, id);
        return () => {
            // getVideos();
        };
    }, [category, id]);

    return (
        <>
            {[].map((item, i) => (
                <Video key={i} item={item} />
            ))}
        </>
    );
};

export default VideoList;
