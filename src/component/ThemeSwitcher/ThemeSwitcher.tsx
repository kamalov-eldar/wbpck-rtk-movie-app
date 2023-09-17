import React, { memo } from "react";
import { useTheme } from "providers/themeProvider/useTheme";
import { Theme } from "providers/themeProvider/ThemeContext";
import Button, { ButtonTheme } from "component/Button/Button";
import MoonIcon from "assets/svg/MoonIcon.svg";
import SunIcon from "assets/svg/SunIcon.svg";
import cls from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={cls.ThemeSwitcher}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                {theme === Theme.DARK ? <SunIcon style={{ minWidth: "50px" }} /> : <MoonIcon style={{ minWidth: "50px" }} />}
                <span style={{ color: "#fff" }}>{theme === Theme.DARK ? "Light Theme" : "Dark  Theme"}</span>
            </Button>
        </div>
    );
});
