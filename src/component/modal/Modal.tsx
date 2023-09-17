import classNames from "classnames";
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "providers/themeProvider/useTheme";

import cls from "./Modal.module.scss";
import { Portal } from "component/Portal/Portal";
import { TMods } from "global/types/global";
import Button, { ButtonTheme } from "component/Button/Button";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        console.log("closeHandler:");
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler],
    );

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: TMods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const modsContent = {
        [cls["content-trailer"]]: className === "TrailerModal",
        [cls["content"]]: !(className === "TrailerModal"),
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={classNames(modsContent)} onClick={onContentClick}>
                        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.btn_modal)} onClick={closeHandler}>
                            <i className={classNames(cls.bx, "bx bx-x")}></i>
                        </Button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
