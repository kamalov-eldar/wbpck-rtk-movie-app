import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import { StyleDecorator } from "../StyleDecorator/StyleDecorator";
import { RouterDecorator } from "../RouterDecorator/RouterDecorator";
import { StoreDecorator } from "../StoreDecorator/StoreDecorator";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, RouterDecorator],
};

export default preview;
