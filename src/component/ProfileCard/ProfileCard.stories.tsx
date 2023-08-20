import avatar from "../../assets/hacker-cat.jpg";
import { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country, Currency } from "global/types/global";
import { Theme } from "providers/themeProvider/ThemeContext";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";

const meta = {
    title: "pages/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        profile: {
            username: "admin",
            age: 22,
            country: Country.Madagascar,
            lastname: "Serverovich",
            firstname: "Admin",
            city: "asf",
            currency: Currency.USD,
            avatar,
        },
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryLightwithError: Story = {
    args: {
        error: "Произошла ошибка при загрузке профиля",
    },
};
PrimaryLightwithError.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryLightLoading: Story = {
    args: {
        isLoading: true,
    },
};
PrimaryLightLoading.decorators = [ThemeDecorator(Theme.LIGHT)];
