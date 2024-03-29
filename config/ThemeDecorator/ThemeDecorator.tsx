import { StoryFn } from "@storybook/react";
import { Theme } from "providers/themeProvider/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={`storybook-custom ${theme}`}>
            <StoryComponent />
        </div>
    );
};
