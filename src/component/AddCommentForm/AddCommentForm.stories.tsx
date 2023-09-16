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
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

/* export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [
    StoreDecorator({}),
]; */
