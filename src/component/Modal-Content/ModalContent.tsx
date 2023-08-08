import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./ModalContent.scss";

/* type ModalPropsType = {
    activeProps: boolean;
    id: string;
    children: ReactNode;
}; */
type ModalContentPropsType = {
    onClose: () => void;
    children: ReactNode;
    activeProps: boolean;
    id: string;
};

/* const Modal: FC<ModalPropsType> = ({ activeProps, id, children }) => {
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        setActive(activeProps);
    }, [activeProps]);

    return (
        <div id={id} className={`modal ${active ? "active" : ""}`}>
            {children}
        </div>
    );
}; */

const ModalContent: FC<ModalContentPropsType> = ({ activeProps, id, onClose, children }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        setActive(activeProps);
    }, [activeProps]);

    const closeModal = () => {
        if (contentRef) {
            contentRef?.current?.parentElement?.classList.remove("active");
        }
        if (onClose) onClose();
    };
    return (
        <div id={id} className={`modal ${active ? "active" : ""}`}>
            <div ref={contentRef} className="modal__content">
                {children}
                <div className="modal__content__close" onClick={closeModal}>
                    <i className="bx bx-x"></i>
                </div>
            </div>
        </div>
    );
};

export default ModalContent;
