import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../config/ThemeDecorator/ThemeDecorator";
import { Theme } from "providers/theme/ThemeContext";
import MovieCard from "./MovieCard";

const meta = {
    title: "Example/MovieCard",
    component: MovieCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MovieCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: { movieItem: { id: 1, title: "title", backdrop_path: "url", overview: "", poster_path: "" }, category: "movie" },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: { movieItem: { id: 1, title: "title", backdrop_path: "url", overview: "", poster_path: "" }, category: "movie" },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
