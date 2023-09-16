import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentList } from "./CommentList";

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: "1",
            text: "hello world",
            movieId: 1,
            user: { id: "1", username: "Vasya", avatar: "" },
        },
        {
            id: "2",
            text: "Comment 2",
            movieId: 1,
            user: { id: "1", username: "Petya", avatar: "" },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};