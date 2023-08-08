import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import { Input } from "./Input";

const meta = {
    title: "Example/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        placeholder: 'placeholder',
        value: '123123',
           // theme: ButtonTheme.PRIMARY,
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        placeholder: 'placeholder',
        value: '123123',
           // theme: ButtonTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight: Story = {
    args: {
        placeholder: 'placeholder',
        value: '123123',
           // theme: ButtonTheme.OUTLINE,
    },
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark: Story = {
    args: {
        placeholder: 'placeholder',
        value: '123123',
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
