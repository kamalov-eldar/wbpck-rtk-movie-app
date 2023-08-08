import cls from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";
import { Modal } from "component/Modal/Modal";
import classNames from "classnames";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    console.log("className: ", className);
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            // lazy
        >
            <LoginForm />
        </Modal>
    );
};
