import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import classNames from "classnames";
import { TMods } from "global/types/global";

export enum ButtonTheme {
    PRIMARY = "primary",
    LOAD = "load",
    OUTLINE = "outline",
    OUTLINE_THIN = "outline_thin",
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    // size?: ButtonSize;
    disabled?: boolean;
    isShrink?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, isShrink, theme = ButtonTheme.OUTLINE, square, disabled, ...otherProps } = props;
    const mods: TMods = {
        [cls[theme]]: true,
        // [cls.square]: square,
        // [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button disabled={disabled} className={classNames([mods, className], isShrink && "shrink_button")} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
