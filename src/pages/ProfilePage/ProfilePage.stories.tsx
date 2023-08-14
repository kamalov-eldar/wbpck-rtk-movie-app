import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "providers/themeProvider/ThemeContext";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "../../../config/StoreDecorator/StoreDecorator";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {},
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const PrimaryDark: Story = {
    args: {},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
