import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import LoginModalContent from "./LoginModalContent";
import { StoreDecorator } from "../../../../config/StoreDecorator/StoreDecorator";

const meta = {
    title: "Example/LoginForm",
    component: LoginModalContent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LoginModalContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {},
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ authForm: { username: "admin1", password: "123" } })];

export const PrimaryDark: Story = {
    args: {},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ authForm: { username: "admin1", password: "123" } })];

export const withErrorDark: Story = {
    args: {},
};
withErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ authForm: { username: "admin", password: "123", error: "error mesage" } }),
];
export const withErrorLight: Story = {
    args: {},
};
withErrorLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ authForm: { username: "admin", password: "123", error: "error mesage" } }),
];

export const LoadingDark: Story = {
    args: {},
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ authForm: { isLoading: true } })];

export const LoadingLight: Story = {
    args: {},
};
LoadingLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ authForm: { isLoading: true } })];
