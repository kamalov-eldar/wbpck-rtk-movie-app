import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import classNames from "classnames";
import { TMods } from "global/types/global";

export enum ButtonTheme {
    PRIMARY = "primary",
    OUTLINE = "outline",
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
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ButtonTheme.OUTLINE, square, disabled, ...otherProps } = props;
    const mods: TMods = {
        [cls[theme]]: true,
        // [cls.square]: square,
        // [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button disabled={disabled} className={classNames({ [cls[theme]]: true }, [disabled, mods, className])} {...otherProps}>
            {children}
        </button>
    );
};

export default memo(Button);
