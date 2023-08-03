import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonTheme {
    PRIMARY = "primary",
    OUTLINE = "outline",
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

type ButtonPropsType = {
    onClick?: () => void;
    className?: string;
    children?: ReactNode | string;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    // size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, disabled, ...otherProps } = props;
    return (
        <button className={classNames({ [cls[theme]]: true }, [className])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
