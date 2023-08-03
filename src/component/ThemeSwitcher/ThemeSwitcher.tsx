import React from "react";
import classNames from "classnames";
import { useTheme } from "providers/theme/useTheme";
import { Theme } from "providers/theme/ThemeContext";
import Button, { ButtonTheme } from "component/button/Button";
import cls from "../button/Button.module.scss";
import DarkIcon from "assets/svg/DarkIcon";
import LightIcon from "assets/svg/LightIcon";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
