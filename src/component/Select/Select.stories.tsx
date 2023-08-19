import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";

const meta = {
    title: "Example/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый пункт" },
            { value: "1234", content: "Второй пункт" },
        ],
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
