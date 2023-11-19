import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonTheme } from "../Button/Button";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LightIcon from "assets/svg/LightIcon";
import DarkIcon from "assets/svg/DarkIcon";

//import { ButtonS } from "../button/Button.stories";

const meta = {
    title: "ThemeSwitcher",
    component: ThemeSwitcher,
    parameters: {
        layout: "centered",
    },
    /* args: {
        theme: Theme.DARK,
        buttonTheme: ButtonTheme.CLEAR,
    }, */
    tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const ThemeSwitcherLight: Story = {
    args: {
        buttonTheme: ButtonTheme.CLEAR,
    },
    /* render: ({ buttonTheme }) => (
        <Button theme={buttonTheme}>
            <DarkIcon />
        </Button>
    ), */
};
ThemeSwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeSwitcherDark: Story = {
    args: {
        buttonTheme: ButtonTheme.CLEAR,
    },
    /* render: ({ buttonTheme }) => (
        <Button theme={buttonTheme}>
            <LightIcon />
        </Button>
    ), */
};

ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
