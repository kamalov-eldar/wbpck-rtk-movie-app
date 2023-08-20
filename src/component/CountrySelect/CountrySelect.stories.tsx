import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";
import { CountrySelect } from "./CountrySelect";

const meta = {
    title: "Example/CountrySelect",
    component: CountrySelect,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CountrySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {},
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];