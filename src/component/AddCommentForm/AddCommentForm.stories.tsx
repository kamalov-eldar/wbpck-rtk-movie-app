import { Meta, StoryObj } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import AddCommentForm from "./AddCommentForm";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import { StoreDecorator } from "../../../config/StoreDecorator/StoreDecorator";

const meta = {
    title: "Example/AddCommentForm",
    component: AddCommentForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        onSendComment: action("onSendComment"),
        user: {
            avatar: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            id: "1",
            username: "admin",
        },
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
