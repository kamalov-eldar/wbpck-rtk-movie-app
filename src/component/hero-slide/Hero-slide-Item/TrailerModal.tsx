import { FC, useRef } from "react";
import ModalContent from "../../Modal-Content/ModalContent";
import { TMovieItem } from "api/types";

type TrailerModalProps = {
    item: TMovieItem;
};

const TrailerModal: FC<TrailerModalProps> = ({ item }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const onClose = () => {
        if (iframeRef) {
            iframeRef?.current?.setAttribute("src", "");
        }
    };

    return (
        /*    <Modal activeProps={false} id={`modal_${item.id}`}> */
        <ModalContent onClose={onClose} activeProps={false} id={`modal_${item.id}`}>
            <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
        </ModalContent>
        /* </Modal> */
    );
};

export default TrailerModal;
