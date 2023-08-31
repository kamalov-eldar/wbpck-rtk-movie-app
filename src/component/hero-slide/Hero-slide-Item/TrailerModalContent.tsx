import { FC, useEffect, useMemo, useRef } from "react";
import ModalContent from "../../Modal-Content/ModalContent";
import { TMovieItem } from "api/types";
import { useSelector } from "react-redux";
import { selectVideosList, selectVideosListIsLoading } from "store/videos/selectors/selectVideosList";
import { Modal } from "component/Modal/Modal";
import LoginModalContent from "features/AuthByUserName/LoginForm/LoginModalContent";
import { Loader } from "component/Loader/Loader";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchVideosList } from "store/videos/fetchVideosList/fetchVideosList";
import cls from "./TrailerModal.module.scss";
import classNames from "classnames";
import Button, { ButtonTheme } from "component/button/Button";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { videosReducer } from "store/videos/slice/videosSlice";
import { Skeleton } from "component/Skeleton/Skeleton";

interface TrailerModalContentProps {
    id: number;
}

const initialReducers: ReducersList = {
    videos: videosReducer,
};

const TrailerModalContent: FC<TrailerModalContentProps> = ({ id }) => {
    console.log('id: ', id);
    console.log("TrailerModalContent: ");
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const dispatch = useAppDispatch();

    const videosListData = useSelector(selectVideosList);
    //console.log("videosListData: ", videosListData);
    const isLoading = useSelector(selectVideosListIsLoading);
    // console.log("isLoading: ", isLoading);
    // console.log("videosListData: ", videosListData);

    useEffect(() => {
        dispatch(fetchVideosList(id));
    }, [id, dispatch]);

    const onClose = () => {
        /* if (iframeRef) {
            iframeRef?.current?.setAttribute("src", "");
        } */
        // setOpenTrailerModal(false);
    };

    let content = <div></div>;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (videosListData) {
        content = (
            <div>
                <Button theme={ButtonTheme.CLEAR} className={classNames(cls.btn_trailer)} onClick={onClose}>
                    <i className={classNames(cls.bx, "bx bx-x")}></i>
                </Button>
                <iframe
                    width="100%"
                    height="500px"
                    title="trailer"
                    src={`https://www.youtube.com/embed/${videosListData[0].key}`}></iframe>
            </div>
        );
    }

    return (
        /*   <Modal className="TrailerModal" isOpen={isOpenTrailerModal} onClose={onClose}> */
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            {content}
        </DynamicModuleLoader>

        /*   </Modal> */
    );
};

export default TrailerModalContent;
