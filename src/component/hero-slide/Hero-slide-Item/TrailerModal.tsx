import cls from "./LoginModal.module.scss";
import { Modal } from "component/Modal/Modal";
import { Suspense } from "react";
import { Loader } from "component/Loader/Loader";
import { TrailerModalAsync } from "./TrailerModal.async";

interface TrailerModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

export const TrailerModal = ({ className, isOpen, onClose, id }: TrailerModalProps) => {
    return (
        <Modal className="TrailerModal" isOpen={isOpen} onClose={onClose} lazy>
            <Suspense
                fallback={
                    <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Loader />
                    </div>
                }>
                <TrailerModalAsync id={id} />
            </Suspense>
        </Modal>
    );
};
