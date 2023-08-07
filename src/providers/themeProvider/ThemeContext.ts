import { createContext } from "react";

export enum Theme {
    // eslint-disable-next-line no-unused-vars
    LIGHT = "light_theme",
    // eslint-disable-next-line no-unused-vars
    DARK = "dark_theme",
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
