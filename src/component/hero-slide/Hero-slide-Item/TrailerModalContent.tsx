import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectVideosList, selectVideosListError, selectVideosListIsLoading } from "store/videos/selectors/selectVideosList";
import { Loader } from "component/Loader/Loader";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchVideosList } from "store/videos/fetchVideosList/fetchVideosList";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { videosReducer } from "store/videos/slice/videosSlice";

interface TrailerModalContentProps {
    id: number;
}

const initialReducers: ReducersList = {
    videos: videosReducer,
};

const TrailerModalContent: FC<TrailerModalContentProps> = ({ id }) => {
    const dispatch = useAppDispatch();

    const videosListData = useSelector(selectVideosList);
    const isLoading = useSelector(selectVideosListIsLoading);
    const error = useSelector(selectVideosListError);

    useEffect(() => {
        dispatch(fetchVideosList(id));
    }, [id, dispatch]);

    let content = <div>1</div>;

    if (isLoading) {
        content = <Loader />;
    } else if (videosListData) {
        content = (
            <iframe
                width="100%"
                height="500px"
                title="trailer"
                src={`https://www.youtube.com/embed/${videosListData[0].key}`}></iframe>
        );
    } else {
        content = <div>{error}</div>;
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>{content}</div>
        </DynamicModuleLoader>
    );
};

export default TrailerModalContent;
