import React from "react";
import { CurrencySelect } from "./CurrencySelect";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/themeProvider/ThemeContext";

const meta = {
    title: "Example/CurrencySelect",
    component: CurrencySelect,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CurrencySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {},
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
