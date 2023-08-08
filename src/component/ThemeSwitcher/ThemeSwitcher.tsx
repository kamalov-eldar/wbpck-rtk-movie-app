import React from "react";
import { useTheme } from "providers/themeProvider/useTheme";
import { Theme } from "providers/themeProvider/ThemeContext";
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
