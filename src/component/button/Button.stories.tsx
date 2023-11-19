import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonTheme } from "./Button";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";

const meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.PRIMARY,
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledDark: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.PRIMARY,
        disabled: true,
    },
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledLight: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.PRIMARY,
        disabled: true,
    },
};
DisabledLight.decorators = [ThemeDecorator(Theme.LIGHT)];

/*
export const Large: Story = {
    args: {
        children: "Text",
    },
};

export const Small: Story = {
    args: {
        children: "Text",
    },
}; */
