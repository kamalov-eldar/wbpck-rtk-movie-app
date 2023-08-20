import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "providers/themeProvider/ThemeContext";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "../../../config/StoreDecorator/StoreDecorator";
import { Country, Currency } from "global/types/global";

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
PrimaryLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            form: {
                username: "admin",
                age: 22,
                country: Country.Bahamas,
                lastname: "Serverovich",
                firstname: "Admin",
                city: "asf",
                currency: Currency.EUR,
            },
        },
    }),
];

export const PrimaryDark: Story = {
    args: {},
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: "admin",
                age: 22,
                country: Country.Bahamas,
                lastname: "Serverovich",
                firstname: "Admin",
                city: "asf",
                currency: Currency.EUR,
            },
        },
    }),
];
