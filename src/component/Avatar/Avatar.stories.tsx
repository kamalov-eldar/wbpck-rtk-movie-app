import { Meta, StoryObj } from "@storybook/react";
import AvatarImg from "./storybook.jpg";
import { Avatar } from "./Avatar";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";

const meta = {
    title: "Example/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryLightSmall: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
PrimaryLightSmall.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkSmall: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
PrimaryDarkSmall.decorators = [ThemeDecorator(Theme.DARK)];
