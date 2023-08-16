import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import Header from "./Header";
import { StoreDecorator } from "../../../config/StoreDecorator/StoreDecorator";

const meta = {
    title: "Example/Header",
    component: Header,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ authForm: { username: "admin", password: "123" } })];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ authForm: { username: "admin", password: "123" } })];
