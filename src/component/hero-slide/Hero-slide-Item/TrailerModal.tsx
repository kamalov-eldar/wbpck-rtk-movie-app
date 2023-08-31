import cls from "./LoginModal.module.scss";
import { Modal } from "component/Modal/Modal";
import classNames from "classnames";
import { Suspense } from "react";
import { Loader } from "component/Loader/Loader";
import { TrailerModalAsync } from "./TrailerModal.async";

interface TrailerModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    id:number;
}

export const TrailerModal = ({ className, isOpen, onClose, id }: TrailerModalProps) => {
    return (
        <Modal
            className="TrailerModal"
            /* className={classNames(cls.LoginModal, {}, [className])} */
            isOpen={isOpen}
            onClose={onClose}
            lazy>
            <Suspense fallback={<Loader />}>
                <TrailerModalAsync id={id}/* onSuccess={onClose} */ />
            </Suspense>
            {/*  <LoginForm onSuccess={onClose} /> */}
        </Modal>
    );
};
