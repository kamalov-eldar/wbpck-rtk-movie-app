import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import { LoginForm } from "./LoginForm";

const meta = {
    title: "Example/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        // theme: ButtonTheme.PRIMARY,
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        // theme: ButtonTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight: Story = {
    args: {
        // theme: ButtonTheme.OUTLINE,
    },
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark: Story = {
    args: {
        // theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

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
