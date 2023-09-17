import React, { FC, useEffect } from "react";
import Video from "./video/Video";
import "./VideoList.scss";
import { TCategoryType } from "../../api/types";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchVideosList } from "store/videos/fetchVideosList/fetchVideosList";
import { selectVideosList, selectVideosListIsLoading, selectVideosListError } from "store/videos/selectors/selectVideosList";
import { DynamicModuleLoader, ReducersList } from "component/DynamicModuleLoader/DynamicModuleLoader";
import { videosReducer } from "store/videos/slice/videosSlice";

type VideoListProps = {
    id?: number;
    category?: TCategoryType;
};

const initialReducers: ReducersList = {
    videos: videosReducer,
};

const VideoList: FC<VideoListProps> = ({ category, id }) => {
    const dispatch = useAppDispatch();

    const videosListData = useSelector(selectVideosList);
    const isLoading = useSelector(selectVideosListIsLoading);
    const error = useSelector(selectVideosListError);

    useEffect(() => {
        if (id) dispatch(fetchVideosList(id));
    }, [id, dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className="VideosList">
                {videosListData?.slice(0, 3).map((item, i) => (
                    <Video key={i} item={item} />
                ))}
            </div>
        </DynamicModuleLoader>
    );
};

export default VideoList;
